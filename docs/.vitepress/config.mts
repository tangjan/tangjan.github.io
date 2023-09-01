import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "糖加盐的学习笔记",
  description: "Jan Tang",
  head: [['link', { rel: 'icon', href: 'https://cdn.tangjiayan.com/logo.svg' }]],
  // lastUpdated: true,
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
          { text: 'liunx',
            collapsed: true,
            items: [
              { text: '常见命令的全称', link: '/unclassified/linux/full-name' },
              { text: '用户管理', link: '/unclassified/linux/user' }
            ]
          },
          { text: '未分类',
            collapsed: true,
            items: [
              { text: 'Git 指令速查表', link: '/unclassified/git/git-commands' },
              { text: '向 Hyper-V 虚拟机中传输文件', link: '/unclassified/hyper-v/transfer-files-to-vm' },
              { text: 'VS Code 插件 markdownlint 提示 “no-hard-tabs”', link: '/unclassified/vscode-hard-tab'},
            ]
          },
        ],
      },
      {
        text: '建站',
        items: [
          {
            text: '建站',
            collapsed: true,
            items: [
              { text: 'VitePress 部署到 Github Pages', link: '/web-build/vitepress-github-pages'},
              { text: 'CAA 类型解析记录会影响 SSL 证书的申请', link: '/web-build/caa-ssl'},
              { text: 'Windows 本地 Wordpress CMS 搭建', link: '/web-build/windows-local-wordpress'},
              { text: 'CSS linear-gradient 渐变色', link: '/web-build/linear-gradient-tangjiayan'},
              { text: 'XAMPP - phpmyadmin：Error establishing a database connection', link: '/web-build/debug/Error-establishing-a-database-connection'},
            ]
          }
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

