import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "糖加盐的学习笔记",
  description: "Jan Tang",
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  lang: 'zh-CN',
  lastUpdated: true,
  srcDir: 'src',

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // nav: [
    //   // { text: '主页', link: '/' },
    //   // { text: '学习笔记', link: '/markdown-examples' }
    // ],

    editLink: {
        pattern: "https://github.com/tangjan/tangjan.github.io/edit/main/docs/src/:path",
        text: "在 GitHub 上编辑此页面",

    },

    lastUpdatedText: "最后更新于",

    logo: '/favicon.svg',

    // footer:{
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tangjan' }
    ],

    sidebar: [
      {
        text: 'WELCOME',
        link: '/index.md'
      },
      {
        text: '更新日志',
        link: '/update-log'
      },
      {
        text: '未分类',
        items: [
          {
            text: '未分类',
            collapsed: true,
            items: [
              { text: '向 Hyper-V 虚拟机中传输文件', link: '/unclassified/hyper-v/transfer-files-to-vm' },
              { text: 'Bitvise Access Denied 问题', link: '/unclassified/bitvise-access-denied'},
            ]
          },
          { text: 'Git',
            collapsed: true,
            items: [
              {
                text: 'debug',
                collapsed: true,
                items: [
                    { text: 'Connection timed out', link: '/unclassified/git/debug/connection-timed-out'},
                    { text: 'Recv failure: Connection was reset', link: '/unclassified/git/debug/recv-failure'},
                ]
              },
              { text: 'Git / GitHub 的基本使用', link: '/unclassified/git/git-github' },
            ]
          },
          { text: 'Linux',
            collapsed: true,
            items: [
              {
                text: 'debug',
                collapsed: true,
                items:[
                  { text: 'curl 安装的软件源问题', link: '/unclassified/linux/debug/curl-repo'},
                ]
              },
              { text: '常见命令的全称', link: '/unclassified/linux/full-name' },
            ]
          },
          { text: 'PhotoShop',
            collapsed: true,
            items: [
              { text: '仿制图章工具', link: '/unclassified/photoshop/clone-stamp' },
            ]
          },
          { text: '本科',
            collapsed: true,
            items: [
              { text: 'Simulink SVPWM 仿真', link: '/unclassified/undergraduate/simulink-svpwm' },
              { text: 'MATLAB 拼图游戏', link: '/unclassified/undergraduate/matlab-jigsaw' },
              { text: 'YOLO 绝缘子及缺陷识别', link: '/unclassified/undergraduate/yolo-insulator' },
            ]
          },
        ],
      },
      {
        text: '网站',
        // collapsed: true,
        items: [
          {
            text: '未分类',
            collapsed: true,
            items: [
              { text: '仿豆瓣主页静态页面', link: '/web/fake-douban'},
              { text: 'CAA 类型解析记录会影响 SSL 证书的申请', link: '/web/caa-ssl'},
              { text: 'XAMPP - phpmyadmin：Error establishing a database connection', link: '/web/debug/Error-establishing-a-database-connection'},
              { text: 'url', link: '/web/url'},
              { text: 'WebStackPage 个人导航站', link: '/web/webstackpage.md'},
            ]
          },
          {
            text: 'CSS',
            collapsed: true,
            items:[
              { text: 'linear-gradient 渐变色', link: '/web/css/linear-gradient-tangjiayan'},
            ],
          },
          {
            text: 'HTML',
            collapsed: true,
            items:[
              { text: 'HTML 注音元素 &lt;ruby&gt;', link: '/web/html/ruby'},
              { text: 'svg 图标大小不对齐问题', link: '/web/html/svg-misaligned'},
              { text: '用 png 图片代替 svg 的图形元素', link: '/web/html/neodb-png-svg'},
              
            ],
          },
          {
            text: 'JS',
            collapsed: true,
            items:[
              { text: 'JavaScript 初探——猜数字小游戏', link: '/web/js/js-number-guessing'},
              { text: '将 url 中的 query 字段显示在网页中', link: '/web/js/query-display'},
            ],
          },
        ]
      },
      {
        text: 'CMS',
        items: [
          {
            text: 'Typecho',
            collapsed: true,
            items:[
              { text: 'Debian 10 部署 Typecho', link: '/cms/typecho/debian10-typecho'},
              { text: 'Typecho首页文章没排满就换页', link: '/cms/typecho/typecho-page-change'},
            ],
          },
          {
            text: 'WordPress',
            collapsed: true,
            items:[
              { text: 'Windows 本地 Wordpress 搭建', link: '/cms/wordpress/windows-local-wordpress'},
            ],
          },
        ]
      },
      {
        text: 'SSG',
        items: [
          {
            text: 'Hexo',
            collapsed: true,
            items:[
              {
                text: 'debug',
                collapsed: true,
                items:[
                  { text: '此系统上禁止运行脚本', link: '/ssg/hexo/debug/script-forbidden'},
                ]
              },
            ],
          },
          {
            text: 'Jekyll',
            collapsed: true,
            items:[
              { text: '个人在线简历', link: '/ssg/jekyll/jekyll-cv.md'},
            ],
          },
          {
            text: 'VitePress',
            collapsed: true,
            items:[
              {
                text: 'debug',
                collapsed: true,
                items:[
                  { text: 'spawn-git-ENOENT', link: '/ssg/vitepress/debug/spawn-git-ENOENT'},
                  { text: 'Error: listen EACCES', link: '/ssg/vitepress/debug/listen-EACCES'},
                  { text: 'ERR_TTY_INIT_FAILED', link: '/ssg/vitepress/debug/ERR_TTY_INIT_FAILED'},
                ]
              },
              { text: '部署到 Github Pages', link: '/ssg/vitepress/vitepress-github-pages'},
              { text: '部署到云服务器', link: '/ssg/vitepress/vitepress-tencent-cloud'},
              { text: '使用 Katex', link: '/ssg/vitepress/vitepress-katex'},
            ],
          },
        ]
      },
      {
        text: '编程',
        items: [
          {
            text: 'C++',
            collapsed: true,
            items: [
              {
                  text: 'debug',
                  collapsed: true,
                  items: [
                    { text: '牛客 Do not declare C-style arrays, use std::array<> instead', link: '/programming/c++/debug/nowcoder-use-stdarray-instead'}
                  ]
              },
            ]
          },
          {
            text: 'VS Code',
            collapsed: true,
            items: [
              {
                text: 'debug',
                collapsed: true,
                items: [
                  { text: 'git commit 时一直加载', link: '/programming/vscode/debug/commit-stuck' },
                  { text: 'no-hard-tabs', link: '/programming/vscode/debug/vscode-hard-tab'},
                ]
            },
              { text: '配置 C/C++ MinGW 运行环境', link: '/programming/vscode/cpp-MinGW-env' },
              { text: '同步扩展', link: '/programming/vscode/sync-extensions'},
            ]
          },
        ]
      },
      {
        text: '日语',
        items:[
          {
            text: '五十音',
            collapsed: true,
            items: [
              { text: '五十音图', link: '/japanese/gojuon/gojuon'},
              { text: '五十音图-易混淆标色版', link: '/japanese/gojuon/confusing-gojuon'},
              { text: '五十音笔顺', link: '/japanese/gojuon/gojuon-stroke-order'},
              { text: '浊音/半浊音', link: '/japanese/gojuon/voiced'},
            ] 
          },
          {
            text: 'ACGN',
            collapsed: true,
            items: [
              { text: '《实教》', link: '/japanese/acgn/shi-jiao' },
              { text: '《CHAOS;CHILD》', link: '/japanese/acgn/chaos-child' },
              { text: '《魔法使之夜》', link: '/japanese/acgn/maho-yoru' },
              { text: '《Summer Pockets》', link: '/japanese/acgn/summer-pockets' },
              { text: '《金辉恋曲四重奏》', link: '/japanese/acgn/kiniro' },
              { text: '《SPY×FAMILY》', link: '/japanese/acgn/spy-family' },
            ]
          },
        ]
      },
      {
        text: '嵌入式',
        items:[
          {
            text: '嵌入式',
            collapsed: true,
            items: [
              { text: 'STM32 命名规则', link: '/embeded/stm32-naming-rule'},
              { text: 'STM32 点灯大师', link: '/embeded/stm32-light'},
              { text: 'STM32 点灯大大师', link: '/embeded/stm32-blink'},
            ]
          }
        ]
      },
      {
        text: 'ANTI',
        items:[
          { 
            text: 'v2ray',
            collapsed: true,
            items:[
              { text: '重装 v2ray - WS + TLS + Web + CloudFlare', link: '/anti/v2ray/reinstall-v2ray' },
            ]
          },
          { text: 'ANTI 是什么', link: '/anti/whats-anti'},
          
        ]
      },
      {
        text: `www.tangjiayan.cn`, link: 'https://www.tangjiayan.cn',
      },
      {
        text: '旧笔记站', link: 'https://old-notes.tangjiayan.cn',
      },
      {
        text: `CC BY-NC-SA 4.0`, link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
    ],
  }
})

