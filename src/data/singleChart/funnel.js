/* 漏斗图 */
export const data_funnel = [{
    value: 60,
    name: '访问'
  },
  {
    value: 40,
    name: '咨询'
  },
  {
    value: 20,
    name: '订单'
  },
  {
    value: 80,
    name: '点击'
  },
  {
    value: 100,
    name: '展现'
  }
];
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
    name:"",
    position:""
  }
};
