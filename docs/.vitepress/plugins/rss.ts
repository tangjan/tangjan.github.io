import { writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Feed } from "feed";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import type { Plugin } from "vitepress";

export interface RSSPluginOptions {
  title: string;
  description: string;
  author: {
    name: string;
    email: string;
    link: string;
  };
  siteUrl: string;
}

interface Post {
  title: string;
  url: string;
  date: Date;
  description: string;
  content: string;
  author: Array<{
    name: string;
    email: string;
    link: string;
  }>;
  categories: string[];
  relativePath: string;
}

export function rssPlugin(options: RSSPluginOptions): Plugin {
  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  const feed = new Feed({
    title: options.title,
    description: options.description,
    id: options.siteUrl,
    link: options.siteUrl,
    language: "zh-CN",
    image: `${options.siteUrl}/logo.png`,
    favicon: `${options.siteUrl}/favicon.ico`,
    copyright: `Copyright © ${new Date().getFullYear()} ${options.author.name}`,
    author: options.author,
    generator: "VitePress",
  });

  const processedFiles = new Set<string>();
  const posts: Post[] = [];

  return {
    name: "notes-jan-rss",

    transform(code: string, id: string) {
      if (processedFiles.has(id)) {
        return code;
      }
      if (id.includes("/docs/20") && id.endsWith(".md")) {
        const content = readFileSync(id, "utf-8");
        const { data, content: markdownContent } = matter(content);

        if (data.date) {
          const relativePath = id
            .replace(/^.*?docs\//, "")
            .replace(/\.md$/, ".html");

          posts.push({
            title: data.title,
            url: `${options.siteUrl}/${relativePath}`,
            date: new Date(data.date.replace(/\//g, "-")),
            description: data.description || "",
            content: markdownContent,
            author: [options.author],
            categories: data.tags || [],
            relativePath,
          });

          processedFiles.add(id);
        }
      }
      return code;
    },

    closeBundle() {
      posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      posts.forEach((post) => {
        const htmlContent = md.render(post.content);
        feed.addItem({
          title: post.title,
          id: post.url,
          link: post.url,
          description: post.description,
          content: htmlContent,
          author: post.author,
          date: new Date(post.date),
          category: post.categories.map((name: string) => ({ name })),
        });
      });

      const outDir = resolve(process.cwd(), "docs/.vitepress/dist");
      writeFileSync(resolve(outDir, "feed.xml"), feed.rss2());
      writeFileSync(resolve(outDir, "feed.atom"), feed.atom1());
      writeFileSync(resolve(outDir, "feed.json"), feed.json1());
    },
  };
}
