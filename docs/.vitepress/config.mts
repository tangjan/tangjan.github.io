import { defineConfig } from "vitepress";
import markdownItKatex from "markdown-it-katex";

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

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "标签", link: "/tag.md" },
      { text: "归档", link: "/archive.md" },
    ],

    editLink: {
      pattern:
        "https://github.com/tangjan/tangjan.github.io/edit/main/docs/src/:path",
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdatedText: "最后更新于",

    logo: "/favicon.png",

    // footer:{
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/tangjan/tangjan.github.io" },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>`,
        },
        link: "https://tangjiayan.com",
        ariaLabel: "Homepage",
      },
    ],

    sidebar: [
      {
        text: "WELCOME",
        link: "/index.md",
      },
      {
        text: "未分类",
        items: [
          {
            text: "未分类",
            collapsed: true,
            items: [
              {
                text: "向 Hyper-V 虚拟机中传输文件",
                link: "/unclassified/hyper-v/transfer-files-to-vm",
              },
              {
                text: "Bitvise Access Denied 问题",
                link: "/unclassified/bitvise-access-denied",
              },
              {
                text: "AHK 配置 Telegram 快捷键",
                link: "/unclassified/telegram-hotkey",
              },
            ],
          },
          {
            text: "Git",
            collapsed: true,
            items: [
              {
                text: "debug",
                collapsed: true,
                items: [
                  {
                    text: "Connection timed out",
                    link: "/unclassified/git/debug/connection-timed-out",
                  },
                  {
                    text: "Recv failure: Connection was reset",
                    link: "/unclassified/git/debug/recv-failure",
                  },
                ],
              },
              {
                text: "Git / GitHub 的基本使用",
                link: "/unclassified/git/git-github",
              },
            ],
          },
          {
            text: "Linux",
            collapsed: true,
            items: [
              {
                text: "debug",
                collapsed: true,
                items: [
                  {
                    text: "curl 安装的软件源问题",
                    link: "/unclassified/linux/debug/curl-repo",
                  },
                ],
              },
              { text: "常见命令的全称", link: "/unclassified/linux/full-name" },
            ],
          },
          {
            text: "PhotoShop",
            collapsed: true,
            items: [
              {
                text: "仿制图章工具",
                link: "/unclassified/photoshop/clone-stamp",
              },
            ],
          },
          {
            text: "本科",
            collapsed: true,
            items: [
              {
                text: "Simulink SVPWM 仿真",
                link: "/unclassified/undergraduate/simulink-svpwm",
              },
              {
                text: "MATLAB 拼图游戏",
                link: "/unclassified/undergraduate/matlab-jigsaw",
              },
              {
                text: "YOLO 绝缘子及缺陷识别",
                link: "/unclassified/undergraduate/yolo-insulator",
              },
            ],
          },
        ],
      },
      {
        text: "网站",
        // collapsed: true,
        items: [
          {
            text: "未分类",
            collapsed: true,
            items: [
              { text: "仿豆瓣主页静态页面", link: "/web/fake-douban" },
              {
                text: "CAA 类型解析记录会影响 SSL 证书的申请",
                link: "/web/caa-ssl",
              },
              {
                text: "XAMPP - phpmyadmin：Error establishing a database connection",
                link: "/web/debug/Error-establishing-a-database-connection",
              },
              { text: "url", link: "/web/url" },
              { text: "WebStackPage 个人导航站", link: "/web/webstackpage.md" },
            ],
          },
          {
            text: "七牛云",
            collapsed: true,
            items: [
              {
                text: "图床同步到本地",
                link: "/web/qiniu-cloud/batch-download",
              },
            ],
          },
          {
            text: "CSS",
            collapsed: true,
            items: [
              {
                text: "linear-gradient 渐变色",
                link: "/web/css/linear-gradient-tangjiayan",
              },
            ],
          },
          {
            text: "HTML",
            collapsed: true,
            items: [
              { text: "HTML 注音元素 &lt;ruby&gt;", link: "/web/html/ruby" },
              {
                text: "svg 图标大小不对齐问题",
                link: "/web/html/svg-misaligned",
              },
              {
                text: "用 png 图片代替 svg 的图形元素",
                link: "/web/html/neodb-png-svg",
              },
            ],
          },
          {
            text: "JS",
            collapsed: true,
            items: [
              {
                text: "JavaScript 初探——猜数字小游戏",
                link: "/web/js/js-number-guessing",
              },
              {
                text: "将 url 中的 query 字段显示在网页中",
                link: "/web/js/query-display",
              },
            ],
          },
        ],
      },
      {
        text: "CMS",
        items: [
          {
            text: "Typecho",
            collapsed: true,
            items: [
              {
                text: "Debian 10 部署 Typecho",
                link: "/cms/typecho/debian10-typecho",
              },
              {
                text: "Typecho首页文章没排满就换页",
                link: "/cms/typecho/typecho-page-change",
              },
            ],
          },
          {
            text: "WordPress",
            collapsed: true,
            items: [
              {
                text: "Windows 本地 Wordpress 搭建",
                link: "/cms/wordpress/windows-local-wordpress",
              },
            ],
          },
        ],
      },
      {
        text: "SSG",
        items: [
          {
            text: "Hexo",
            collapsed: true,
            items: [
              {
                text: "debug",
                collapsed: true,
                items: [
                  {
                    text: "此系统上禁止运行脚本",
                    link: "/ssg/hexo/debug/script-forbidden",
                  },
                ],
              },
            ],
          },
          {
            text: "Jekyll",
            collapsed: true,
            items: [{ text: "个人在线简历", link: "/ssg/jekyll/jekyll-cv.md" }],
          },
          {
            text: "VitePress",
            collapsed: true,
            items: [
              {
                text: "debug",
                collapsed: true,
                items: [
                  {
                    text: "spawn-git-ENOENT",
                    link: "/ssg/vitepress/debug/spawn-git-ENOENT",
                  },
                  {
                    text: "Error: listen EACCES",
                    link: "/ssg/vitepress/debug/listen-EACCES",
                  },
                  {
                    text: "ERR_TTY_INIT_FAILED",
                    link: "/ssg/vitepress/debug/ERR_TTY_INIT_FAILED",
                  },
                ],
              },
              {
                text: "部署到 Github Pages",
                link: "/ssg/vitepress/vitepress-github-pages",
              },
              {
                text: "部署到云服务器",
                link: "/ssg/vitepress/vitepress-tencent-cloud",
              },
              { text: "使用 Katex", link: "/ssg/vitepress/vitepress-katex" },
            ],
          },
        ],
      },
      {
        text: "编程",
        items: [
          {
            text: "C++",
            collapsed: true,
            items: [
              {
                text: "debug",
                collapsed: true,
                items: [
                  {
                    text: "牛客 Do not declare C-style arrays, use std::array<> instead",
                    link: "/programming/c++/debug/nowcoder-use-stdarray-instead",
                  },
                ],
              },
            ],
          },
          {
            text: "VS Code",
            collapsed: true,
            items: [
              {
                text: "debug",
                collapsed: true,
                items: [
                  {
                    text: "git commit 时一直加载",
                    link: "/programming/vscode/debug/commit-stuck",
                  },
                  {
                    text: "no-hard-tabs",
                    link: "/programming/vscode/debug/vscode-hard-tab",
                  },
                  {
                    text: "python 输出乱码",
                    link: "/programming/vscode/debug/python-garbled",
                  },
                ],
              },
              {
                text: "配置 C/C++ MinGW 运行环境",
                link: "/programming/vscode/cpp-MinGW-env",
              },
              { text: "同步扩展", link: "/programming/vscode/sync-extensions" },
            ],
          },
        ],
      },
      {
        text: "日语",
        items: [
          {
            text: "五十音",
            collapsed: true,
            items: [
              { text: "五十音图", link: "/japanese/gojuon/gojuon" },
              {
                text: "五十音图-易混淆标色版",
                link: "/japanese/gojuon/confusing-gojuon",
              },
              {
                text: "五十音笔顺",
                link: "/japanese/gojuon/gojuon-stroke-order",
              },
              { text: "浊音/半浊音", link: "/japanese/gojuon/voiced" },
            ],
          },
          {
            text: "ACGN",
            collapsed: true,
            items: [
              { text: "《实教》", link: "/japanese/acgn/shi-jiao" },
              { text: "《CHAOS;CHILD》", link: "/japanese/acgn/chaos-child" },
              { text: "《魔法使之夜》", link: "/japanese/acgn/maho-yoru" },
              {
                text: "《Summer Pockets》",
                link: "/japanese/acgn/summer-pockets",
              },
              { text: "《金辉恋曲四重奏》", link: "/japanese/acgn/kiniro" },
              { text: "《SPYxFAMILY》", link: "/japanese/acgn/spy-family" },
            ],
          },
        ],
      },
      {
        text: "写作",
        items: [
          {
            text: "未分类",
            collapsed: true,
            items: [{ text: "“哎” de 叫了一声", link: "/writing/de" }],
          },
        ],
      },
      {
        text: "嵌入式",
        items: [
          {
            text: "嵌入式",
            collapsed: true,
            items: [
              { text: "STM32 命名规则", link: "/embeded/stm32-naming-rule" },
              { text: "STM32 点灯大师", link: "/embeded/stm32-light" },
              { text: "STM32 点灯大大师", link: "/embeded/stm32-blink" },
            ],
          },
        ],
      },
      {
        text: "旧笔记站",
        link: "https://old-notes.tangjiayan.com",
      },
      {
        text: `CC BY-NC-SA 4.0`,
        link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      },
    ],
  },
});
