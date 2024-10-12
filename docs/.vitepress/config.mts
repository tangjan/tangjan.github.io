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

    // nav: [
    //   { text: "标签", link: "/tag.md" },
    //   { text: "归档", link: "/archive.md" },
    // ],

    editLink: {
      pattern:
        "https://github.com/tangjan/tangjan.github.io/edit/main/docs/:path",
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
        text: "2024",
        items: [
          {
            text: "5月",
            collapsed: false,
            items: [
              {
                text: "AHK配置Telegram快捷键",
                link: "/2024/05/17/ahk-telegram",
              },
              {
                text: "“哎”de叫了一声",
                link: "/2024/05/10/ai-de",
              },
              {
                text: "七牛云图床同步到本地",
                link: "/2024/05/09/qiniu-batch-download",
              },
              {
                text: "VSCode python输出乱码",
                link: "/2024/05/07/vscode-python-garbled",
              },
              {
                text: "《SPYxFAMILY》角色",
                link: "/2024/05/02/spy-family",
              },
              {
                text: "hexo 此系统上禁止运行脚本",
                link: "/2024/05/02/hexo-script-forbidden",
              },
              {
                text: "Git Connection was reset",
                link: "/2024/05/01/git-recv-failure",
              },
            ],
          },
          {
            text: "4月",
            collapsed: true,
            items: [
              {
                text: "VSCode同步扩展",
                link: "/2024/04/28/vscode-sync-extensions",
              },
              {
                text: "《金辉恋曲四重奏》角色",
                link: "/2024/04/22/kiniro",
              },
              {
                text: "《Summer Pockets》角色",
                link: "/2024/04/17/summer-pockets",
              },
              {
                text: "《魔法使之夜》角色",
                link: "/2024/04/15/maho-yoru",
              },
              {
                text: "《CHAOS;CHILD》角色",
                link: "/2024/04/14/chaos-child",
              },
              {
                text: "png代替svg",
                link: "/2024/04/14/png-svg",
              },
              {
                text: "《实教》角色",
                link: "/2024/04/13/shi-jiao",
              },
              {
                text: "svg图标不对齐问题",
                link: "/2024/04/10/svg-misaligned",
              },
              {
                text: "curl安装的软件源问题",
                link: "/2024/04/05/curl-repo",
              },
            ],
          },
          {
            text: "3月",
            collapsed: true,
            items: [
              {
                text: "五十音图-易混淆标色版",
                link: "/2024/03/17/confusing-gojuon",
              },
              {
                text: "WebStackPage个人导航站",
                link: "/2024/03/16/webstackpage",
              },
              {
                text: "Typecho文章没排满就换页",
                link: "/2024/03/02/typecho-page-change",
              },
              {
                text: "viepress ERR_TTY_INIT_FAILED",
                link: "/2024/03/02/vscode-ERR_TTY_INIT_FAILED",
              },
              {
                text: "Debian10部署Typecho",
                link: "/2024/03/01/debian10-typecho",
              },
            ],
          },
        ],
      },
      {
        text: "2023",
        items: [
          {
            text: "10月",
            collapsed: true,
            items: [
              {
                text: "Jekyll个人在线简历",
                link: "/2023/10/29/jekyll-cv",
              },
              {
                text: "日语五十音笔顺",
                link: "/2023/10/06/gojuon-stroke-order",
              },
            ],
          },
          {
            text: "9月",
            collapsed: true,
            items: [
              {
                text: "日语浊音/半浊音",
                link: "/2023/09/27/japanese-voiced",
              },
              {
                text: "vitepress listen EACCES",
                link: "/2023/09/16/vitepress-listen-EACCES",
              },
              {
                text: "viscode commit 时卡住",
                link: "/2023/09/16/vscode-commit-stuck",
              },
              {
                text: "vscode配置C++环境",
                link: "/2023/09/16/vscode-cpp",
              },
              {
                text: "git Connection timed out",
                link: "/2023/09/14/git-connection-timed-out",
              },
              {
                text: "日语五十音",
                link: "/2023/09/14/gojuon",
              },
              {
                text: "url query字段显示在网页中",
                link: "/2023/09/13/query-display",
              },
              {
                text: "JS初探—猜数字小游戏",
                link: "/2023/09/12/js-number-guessing",
              },
              {
                text: "vitepress部署到云服务器",
                link: "/2023/09/11/vitepress-tencent-cloud",
              },
              {
                text: "Bitvise Access Denied",
                link: "/2023/09/10/bitvise-access-denied",
              },
              {
                text: "GitHub基本使用",
                link: "/2023/09/09/git-github",
              },
              {
                text: "MATLAB 拼图游戏",
                link: "/2023/09/09/matlab-jigsaw",
              },
              {
                text: "YOLO 绝缘子及缺陷识别",
                link: "/2023/09/09/yolo-insulator",
              },
              {
                text: "PhotoShop仿制图章工具",
                link: "/2023/09/08/ps-clone-stamp",
              },
              {
                text: "STM32 点灯大大师",
                link: "/2023/09/08/stm32-blink",
              },
              {
                text: "Simulink SVPWM仿真",
                link: "/2023/09/07/simulink-svpwm",
              },
              {
                text: "STM32 点灯大师",
                link: "/2023/09/07/stm32-light",
              },
              {
                text: "STM32 命名规则",
                link: "/2023/09/06/stm32-naming-rule",
              },
              {
                text: "VitePress 使用 Katex",
                link: "/2023/09/05/vitepress-katex",
              },
              {
                text: "仿豆瓣主页静态页面",
                link: "/2023/09/04/fake-douban",
              },
              {
                text: "HTML注音元素&lt;ruby&gt;",
                link: "/2023/09/03/html-ruby",
              },
              {
                text: "spawn-git-ENOENT",
                link: "/2023/09/01/spawn-git-ENOENT",
              },
              {
                text: "url",
                link: "/2023/09/01/url",
              },
              {
                text: "重装v2ray",
                link: "/2023/09/01/reinstall-v2ray",
              },
            ],
          },
          {
            text: "8月",
            collapsed: true,
            items: [
              {
                text: "CAA类型记录影响SSL证书",
                link: "/2023/08/31/caa-ssl",
              },
              {
                text: "css linear-gradient 渐变色",
                link: "/2023/08/31/css-linear-gradient",
              },
              {
                text: "Linux常见命令的全称",
                link: "/2023/08/31/linux-command-fullname",
              },
              {
                text: "C++ use array instead",
                link: "/2023/08/31/cpp-array",
              },
              {
                text: "向Hyper-V虚拟机传输文件",
                link: "/2023/08/31/transfer-files-to-hyperV",
              },
              {
                text: "VitePress部署到Github Pages",
                link: "/2023/08/31/vitepress-github-pages",
              },
              {
                text: "Windows本地Wordpress",
                link: "/2023/08/31/windows-local-wordpress",
              },
              {
                text: "XAMPP Error establishing",
                link: "/2023/08/28/xampp-Error-establishing",
              },
              {
                text: "VSCode no hard tabs",
                link: "/2023/08/27/vscode-hard-tab",
              },
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
