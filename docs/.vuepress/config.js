const router = require('./public/routers/index')

module.exports = {
  // 站点配置
  locales: {
    // lang: 'zh-CN',
    base: '/<vuePress>/',
  },
  lang: 'zh-CN',
  title: '技术文档',
  description: '这是我的第一个 VuePress 站点',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '青龙相关',
        children: [
          {
            text: '青龙部署',
            link: '/qinglong/README.md'
          },
          {
            text: 'Nark部署',
            link: '/qinglong/Nark'
          }
        ],
      },
      { text: 'JD登录地址', link: 'http://ck.dramarie.com/' },
    ],
    sidebar: router,
    contributors: false,
    // contributorsText: 'Contributors'
  },
  markdown: {
    plugins: [
      'task-lists',
    ]
  },
  plugins: [
    '@vuepress/plugin-search',
  ]
}