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
      // children: [
      //   {
      //     text: '青龙部署',
      //     link: '/qinglong/',
      //   },
      //   {
      //     text: 'Nark部署',
      //     link: '/qinglong/Nark',
      //   },
      //   {
      //     text: 'kingfeng部署',
      //     link: '/qinglong/kingfeng',
      //   }
      // ]
    },
    {
      text: '面经',
      collapsible: true,
      children: ['/reference/interview/README.md']
    }
  ],
  // '/qrcode/': [
  //   {
  //     text: '健康码',
  //     collapsible: true,
  //     children: ['/qrcode/README.md']
  //   }
  // ],
  // '/interview/': [
  //   {
  //     text: '面经',
  //     collapsible: true,
  //     children: ['/interview/README.md']
  //   }
  // ],
}
