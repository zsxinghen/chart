/* 仪表盘 */
export const data_gauge = [];
export const config_gauge = {
  type: "chart", //组件
  chart: "gauge", //图表类型
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
  gaugeType: "type1",
  gaugeShape: "shape3",
  title: {
    isShow: true,
    text: null,
    color: "#000000",
    fontFamliy: "Microsoft YaHei",
    fontSize: 12,
    locationx: "center",
    locationY: "top"
  },
  series: {
    name: "111",
    radius: 80, //大小
    finishColor: "#2d99e2", //type1,type3独有
    isAxisLabel: true,
    axisLabel: [{
      label: '',
      value: 60,
      calculate: '<',
      color: '#E43F3D'
    }, {
      label: '',
      value: 80,
      calculate: '<=',
      color: '#E98E2C'
    }, {
      label: '',
      value: 90,
      calculate: '>=',
      color: '#DDBD4D'
    }],
    color: "#000000",
    fontFamily: "sans-seri",
    fontSize: 12,
    width: 20,
    min: 0,
    max: 100,
    axisTick: true,
    splitLine: true,
    pointer: true,
  },
};
