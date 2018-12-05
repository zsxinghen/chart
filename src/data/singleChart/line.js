/* 折线图 */
export const data_line = [];
export const config_line = {
  type: "chart", //组件
  chart: "line", //图表类型
  remark: null, //备注
  click: false, //点击事件
  tooltip: 'type1',
  dataZoom: {
    isAble: true,
  },
  grid: {
    left: 10,
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
    min: 15202,
    max: 159980,
    dimension: 1,
    orient: 'vertical',
    right: 10,
    top: 'center',
    text: ['HIGH', 'LOW'],
    calculable: true,
    inRange: {
      color: ['#f2c31a', '#24b7f2']
    }
  },
  series: {
    isShow: true,
    color: "#000000",
    fontFamliy: "Microsoft YaHei",
    smooth: false,
    fontSize: 12,
    markLine: false,
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
