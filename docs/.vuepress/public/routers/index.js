// const rm = {
//   qinglong: {
//     title: "青龙",
//     base: "/qinglong",
//   },
//   nark: {
//     title: "青龙",
//     base: "/nark",
//   },
// };

// module.exports = [
//   {
//     text: rm.qinglong.title,
//     collapsible: true,
//     children: [
//       {
//         text: "青龙部署",
//         link: `${rm.qinglong.base}/`,
//       },
//       {
//         text: "Nark",
//         link: `${rm.qinglong.base}/Nark.md`,
//       },
//       {
//         text: "KingFeng",
//         link: `${rm.qinglong.base}/kingfeng`,
//       },
//     ],
//   },
//   {
//     text: rm.nark.title,
//     collapsible: true,
//     children: [
//       {
//         text: "青龙部署",
//         link: `${rm.nark.base}/`,
//       },
//     ],
//   },
// ];

module.exports = {
  '/reference/': [
    {
      text: '青龙',
      collapsible: true,
      children: [
        '/reference/qinglong/README.md',
        '/reference/qinglong/Nark.md',
        '/reference/qinglong/kingfeng.md',
      ],
    },
    {
      text: '面经',
      collapsible: true,
      children: ['/reference/interview/README.md', '/reference/interview/Jianli.md', '/reference/interview/Base.md']
    },
    {
      text: '路由器',
      collapsible: true,
      children: ['/reference/router/README.md']
    },
    {
      text: '科学上网',
      collapsible: true,
      children: ['/reference/vpn/ios.md', '/reference/vpn/android.md', '/reference/vpn/windows.md', '/reference/vpn/Mac.md']
    },
  ],
}
