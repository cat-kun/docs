const rm = {
  qinglong: {
    title: "青龙",
    base: "/qinglong",
  },
};

module.exports = [
  {
    text: rm.qinglong.title,
    collapsible: true,
    children: [
      {
        text: "青龙部署",
        link: `${rm.qinglong.base}/`,
      },
      {
        text: "Nark",
        link: `${rm.qinglong.base}/Nark`,
      },
    ],
  },
];
