/* 折线图 */
export const data_line = [];
var echarts = require("echarts");
export const config_line = {
  type: "chart", //组件
  chart: "line", //图表类型
  remark: null, //备注
  click: false, //点击事件
  lineType: "line",
  tooltip: 'type1',
  updateWay: "refresh", //刷新方式----重新渲染
  dataZoom: {
    x: false,
    y: false
  },
  grid: {
    left: 10,
    right: 10,
  },
  // 波浪颜色
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
  visualMap: {
    status: 'off',
    min: 0,
    max: 100,
    dimension: 1,
    isShow: true,
    type: 'continuous',
    orient: 'vertical',
    right: 10,
    top: 'center',
    text: ['HIGH', 'LOW'],
    calculable: true,
    color: ['#f2c31a', '#24b7f2'],
    pieces: [{}],
  },
  series: {
    isShow: true,
    color: "#000000",
    fontFamliy: "Microsoft YaHei",
    smooth: false,
    fontSize: 12,
    markLine_average: false,
    markLine_max: false,
    markLine_min: false,
    isStep: false,
  },
  xAxis: {
    isShow: true,
    color: "#000000",
    lineColor: "#000000",
    lineWidth: 1,
    fontFamliy: "Microsoft YaHei",
    fontSize: 12,
    name: null,
    data: [],
    splitLine: true, //分割线
    axisLine: true, //坐标轴线
    axisLabel: true //坐标标签
  },
  yAxis: {
    min: null,
    isShow: true,
    name: null,
    splitNumber: 5,
    color: "#000000",
    lineColor: "#000000",
    lineWidth: 1,
    fontFamliy: "Microsoft YaHei",
    fontSize: 12,
    splitLine: true, //分割线
    axisLine: true, //坐标轴线
    axisLabel: true //坐标标签
  },
};
