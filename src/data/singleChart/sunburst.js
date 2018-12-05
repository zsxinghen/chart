/* 旭日图 */
export const data_sunburst = [{   //tree
  name: 'Flora',
  value: 1,
  children: [{
    name: 'Flora',
    value: 1,
    children: []
  }, {
    name: 'Flora',
    value: 1,
    children: []
  }]
}, {
  name: 'Flora',
  value: 1,
  children: [{
    name: 'Flora',
    value: 1,
    children: []
  }]
}];
export const config_sunburst = {
  type: "chart", //组件
  chart: "sunburst", //图表类型
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
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 10,
    inRange: {
      color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
    }
  },
  series: {
    radius: ['0', '80%'],
    highlightPolicy: 'ancestor',
    levels: [],
  }
};
