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
  '/qinglong/': [
    // {
    //   text: 'VuePress Reference',
    //   children: ['/reference/cli.md', '/reference/config.md'],
    // },
    {
      text: '青龙',
      collapsible: true,
      // children: [
      //   '/qinglong/README.md', 
      //   '/qinglong/Nark.md',
      // ],
      children: [
        // {
        //   text: '青龙部署',
        //   link: '/qinglong/',
        // },
        {
          text: 'Nark部署',
          link: '/qinglong/Nark',
        },
        // {
        //   text: 'kingfeng部署',
        //   link: '/qinglong/kingfeng',
        // }
      ]
    }
  ]
}
