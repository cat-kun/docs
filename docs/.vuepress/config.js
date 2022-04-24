const router = require('./public/routers/index')

module.exports = {
  // 站点配置
  // locales: {
  //   lang: 'zh-CN',
  // },
  lang: 'zh-CN',
  title: '技术文档',
  description: '这是我的第一个 VuePress 站点',  
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '',
    nav: [
      { text: 'Home', link: '/' },
      { text: '青龙', link: '/qinglong/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: router,
    // contributors: false,
    // contributorsText: 'Contributors'
  },
  // base: '/<vuePress>/'
}