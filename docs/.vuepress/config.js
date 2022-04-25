const router = require('./public/routers/index')
const { mdEnhance } = require("vuepress-plugin-md-enhance");
console.log('mdEnhance', mdEnhance)

module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: '/images/icon.png' }], // icon图标
  ],
  // 站点配置
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/docs/',
  // lang: 'zh-CN',
  title: '技术文档',
  description: 'GitHub在线文档',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/hero.png',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '青龙相关',
        children: [
          // {
          //   text: '青龙部署',
          //   link: '/qinglong/README.md'
          // },
          {
            text: 'Nark部署',
            link: '/qinglong/Nark'
          },
          {
            text: 'KingFeng部署',
            link: '/qinglong/kingfeng'
          }
        ],
      },
      { text: 'JD登录地址', link: 'http://ck.dramarie.com/' },
    ],
    sidebar: router,
    contributors: false,
    lastUpdated: '更新时间',
    locales: {
      '/': {
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      }
    },
    repo: 'cat-kun/docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  },
  markdown: {
    // plugins: ['task-lists'],
    extendMarkdown: md => {
      // 将段落中的 '\n' 转换为 <br>
      md.set({ breaks: true })
      // 使用更多的 markdown-it 插件!
      // md.use(require('task-lists'))
      // md.use(require('markdown-it-task-lists'), { enabled: true })
    }
  },
  plugins: [
    '@vuepress/plugin-search',
    mdEnhance({
      // 启用任务列表
      tasklist: true,
    }),
  ]
}