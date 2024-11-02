import { defineConfig } from "vitepress";
import markdownItKatex from "markdown-it-katex";
import { sidebar } from "./config/sidebar";
import { rssPlugin } from "./plugins/rss";
import { resolve } from "path";

const customElements = [
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml",
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "糖加盐的学习笔记",
  description: "Jan Tang",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  lang: "zh-CN",
  lastUpdated: true,
  // srcDir: "src",

  markdown: {
    config: (md) => {
      md.use(markdownItKatex);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  vite: {
    plugins: [
      rssPlugin({
        title: "糖加盐的学习笔记",
        description: "Jan Tang",
        siteUrl: "https://tangjiayan.com",
        author: {
          name: "Jan Tang",
          email: "tangjiayan@hotmail.com",
          link: "https://tangjiayan.com",
        },
      }),
    ],
  },

  themeConfig: {
    nav: [
      { text: "标签", link: "/tags.md" },
      { text: "归档", link: "/archives.md" },
    ],

    editLink: {
      pattern:
        "https://github.com/tangjan/tangjan.github.io/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdatedText: "最后更新于",

    logo: "/favicon.png",

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/tangjan/tangjan.github.io" },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>`,
        },
        link: "https://tangjiayan.com",
        ariaLabel: "Homepage",
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`,
        },
        link: "/feed.xml",
        ariaLabel: "RSS",
      },
    ],

    sidebar: sidebar,
  },
});
