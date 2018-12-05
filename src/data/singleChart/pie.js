/* 饼图 */
export const data_pie = [];
export const config_pie = {
  type: "chart", //组件
  chart: "pie", //图表类型
  remark: null, //备注
  click: false, //点击事件
  pieType: "type1", //饼状、环状、南丁格尔图,其他
  // 颜色
  color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
  backgroundColor: "#ffffff",
  title: {
    isShow: true,
    text: null,
    color: "#000000",
    fontFamliy: "Microsoft YaHei",
    fontSize: 12,
    locationx: "center",
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
    locationx: "left",
    locationY: "bottom"
  },
  series: {
    name: null,
    isShow: true,
    color: "#000000",
    fontFamliy: "Microsoft YaHei",
    fontSize: 12,
    radius: '55%',
    center: ['50%', '50%'],
    inRange: "50",
    outRange: "70",
  },
  animation: {
    type: "expansion",
  },
};
