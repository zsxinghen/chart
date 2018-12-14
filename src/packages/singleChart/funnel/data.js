/* 漏斗图 */
export const data_funnel = {
    nameArr: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    valArr: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      },
      {
        value: 1548,
        name: '搜索引擎'
      }
    ]
  };
  export const config_funnel = {
    type: "chart", //组件
    chart: "funnel", //图表类型
    remark: null, //备注
    click: false, //点击事件
    updateWay: "refresh", //刷新方式----重新渲染
    title: {
      isShow: true,
      text: null,
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      locationX: "center",
      locationY: "top"
    },
    grid: {
      left: 10,
    },
    legend: {
      isShow: true,
      data: [],
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      orient: "horizontal",
      locationX: "left",
      locationY: "bottom"
    },
    // 颜色
    color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    backgroundColor: "#ffffff",
    series: {
      gap: 10,
      minSize: 0,
      maxSize: 80,
      funnelAlign: 'center',
      name: "",
      position: ""
    }
  };
  