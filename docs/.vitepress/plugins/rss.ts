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
    name: "vitepress-plugin-rss",

    transform(code: string, id: string) {
      if (processedFiles.has(id)) {
        return code;
      }

      if (id.includes("/docs/202") && id.endsWith(".md")) {
        try {
          const content = readFileSync(id, "utf-8");
          console.log("\n开始处理文章:", id);

          const { data, content: markdownContent } = matter(content);
          console.log("解析出的 frontmatter:", JSON.stringify(data, null, 2));

          if (data.date) {
            console.log("处理文章:", data.title, "日期:", data.date);

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
            console.log("文章添加成功:", relativePath);
          }
        } catch (err) {
          console.error("处理文章失败:", err);
        }
      }
      return code;
    },

    buildEnd(error?: Error) {
      if (error) {
        console.error("RSS plugin build failed:", error);
        return;
      }

      try {
        console.log("找到文章数量:", posts.length);
        if (posts.length === 0) {
          console.log("警告: 没有找到任何文章!");
        }

        posts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        posts.forEach((post) => {
          console.log("添加文章到 RSS:", post.title);

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
        console.log("写入 RSS 文件到:", outDir);

        writeFileSync(resolve(outDir, "feed.xml"), feed.rss2());
        writeFileSync(resolve(outDir, "feed.atom"), feed.atom1());
        writeFileSync(resolve(outDir, "feed.json"), feed.json1());

        console.log("RSS 文件生成成功");
      } catch (err) {
        console.error("生成 RSS feed 失败:", err);
      }
    },
  };
}
