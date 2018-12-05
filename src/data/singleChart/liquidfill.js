/* 水球图 */
export const data_liquidfill = [{
  name: '水球图',
  value: 0.3
}];

export const config_liquidfill = {
  type: "chart", //组件
  chart: "liquidfill", //图表类型
  remark: null, //备注
  click: false, //点击事件
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
  // 波浪颜色
  color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
  backgroundColor: "#ffffff",
  series: {
    shape: '', // 水球外形
    fontSize: 16,
    color: '#D94854',
    arr: [0.5, 0.4, 0.3], //波浪数组
    outline: { //水球外边框
      isShow: false,
    },
    backgroundStyle: { //水球内背景
      color: '',
      borderWidth: 5,
      borderColor: 'red',
    },
    amplitude: '8%',
    waveAnimation: true, //波浪动画
  }
};
