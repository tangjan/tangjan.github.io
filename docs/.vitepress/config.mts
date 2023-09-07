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
  head: [['link', { rel: 'icon', href: 'https://cdn.tangjiayan.com/logo.svg' }]],
  lang: 'zh-CN',
  lastUpdated: true,

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

    logo: 'https://cdn.tangjiayan.com/logo.svg',

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
        text: 'README',
        link: '/index.md'
      },
      {
        text: '每天都要写笔记',
        link: '/everyday-note'
      },
      {
        text: '未分类',
        items: [
          { text: '未分类',
            collapsed: true,
            items: [
              { text: 'Git 指令速查表', link: '/unclassified/git/git-commands' },
              { text: '向 Hyper-V 虚拟机中传输文件', link: '/unclassified/hyper-v/transfer-files-to-vm' },
              { text: 'VS Code 插件 markdownlint 提示 “no-hard-tabs”', link: '/unclassified/vscode-hard-tab'},
            ]
          },
          { text: 'Liunx',
            collapsed: true,
            items: [
              { text: '常见命令的全称', link: '/unclassified/linux/full-name' },
              { text: '用户管理', link: '/unclassified/linux/user' }
            ]
          },
          { text: '本科',
            collapsed: true,
            items: [
              { text: '基于 Simulink 的 SVPWM 仿真', link: '/unclassified/undergraduate/simulink-svpwm' },
            ]
          },
        ],
      },
      {
        text: '建站',
        // collapsed: true,
        items: [
          {
            text: '建站',
            collapsed: true,
            items: [
              { text: '仿豆瓣主页静态页面', link: '/web-build/fake-douban'},
              { text: 'Windows 本地 Wordpress CMS 搭建', link: '/web-build/wordpress/windows-local-wordpress'},
              { text: 'CAA 类型解析记录会影响 SSL 证书的申请', link: '/web-build/caa-ssl'},
              { text: 'XAMPP - phpmyadmin：Error establishing a database connection', link: '/web-build/debug/Error-establishing-a-database-connection'},
              { text: 'url', link: '/web-build/url'},
            ]
          },
          {
            text: 'CSS',
            collapsed: true,
            items:[
              { text: 'linear-gradient 渐变色', link: '/web-build/css/linear-gradient-tangjiayan'},
            ],
          },
          {
            text: 'HTML',
            collapsed: true,
            items:[
              { text: 'HTML 注音元素 &lt;ruby&gt;', link: '/web-build/html/ruby'},
            ],
          },
          {
            text: 'Markdown',
            collapsed: true,
            items:[
              { text: 'GitHub-Style Table', link: '/web-build/markdown/github-style-table'},
            ],
          },
          {
            text: 'VitePress',
            collapsed: true,
            items:[
              { text: 'VitePress 部署到 Github Pages', link: '/web-build/vitepress/vitepress-github-pages'},
              { text: 'VitePress 中使用 Katex', link: '/web-build/vitepress/vitepress-katex'},
              { text: '设置 lastUpdated 时出现 spawn-git-ENOENT', link: '/web-build/vitepress/spawn-git-ENOENT'},
            ],
          },
          {
            text: 'WordPress',
            collapsed: true,
            items:[
              { text: 'Windows 本地 Wordpress CMS 搭建', link: '/web-build/wordpress/windows-local-wordpress'},
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
                items: [
                  {
                    text: '输入/输出数据',
                    collapsed: true,
                    items: [
                      { text: 'cin / cout', link: '/programming/c++/input-output/cin-cout'},
                      { text: 'getline', link: '/programming/c++/input-output/getline'}
                    ]
                  },
                  {
                    text: '容器',
                    collapsed: true,
                    items: [
                      { text: 'array', link: '/programming/c++/containers/array'}
                    ]
                  },
                  {
                    text: 'debug',
                    collapsed: true,
                    items: [
                      { text: '牛客 Do not declare C-style arrays, use std::array<> instead', link: '/programming/c++/debug/nowcoder-use-stdarray-instead'}
                    ]
                  },
                  { text: '格式说明符', link: '/programming/c++/format-specifier'},
                  { text: 'default - C++', link: '/programming/c++/default'}
                ]
              }
            ]
          }
        ]
      },
      {
        text: '嵌入式',
        items:[
          {
            text: '嵌入式',
            collapsed: true,
            items:[
              { text: 'STM32 命名规则', link: '/embeded/stm32-naming-rule'},
              { text: 'STM32 点灯大师', link: '/embeded/stm32-light'},
            ]
          }
        ]
      },
      {
        text: 'ANTI',
        items:[
          { 
            text: 'ANTI',
            collapsed: true,
            items:[
              { text: 'ANTI 是什么', link: '/anti/whats-anti'},
              { text: '重装 v2ray - WS + TLS + Web + CloudFlare', link: '/anti/reinstall-v2ray' }
            ]
          
          }
        ]
      },
      {
        text: `CC BY-NC-SA 4.0`, link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh',
      }
    ],
  }
})

