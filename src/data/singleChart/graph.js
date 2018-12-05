/* 关系图 */
export const data_graph = [];
export const config_graph = {
  type: "chart", //组件
  chart: "graph", //图表类型
  remark: null, //备注
  click: false, //点击事件
  tooltip: 'type1',
  title: {
    isShow: true,
    text: null,
    color: "#000000",
    fontFamliy: "Microsoft YaHei",
    fontSize: 12,
    locationx: "center",
    locationY: "top"
  },
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
  series: {
    name: "111",
    layout: 'circular',
    focusNodeAdjacency: true,
  }
};
