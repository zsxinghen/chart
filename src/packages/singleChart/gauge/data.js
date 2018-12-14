/* 仪表盘 */
export const data_gauge = [{
    value: 335,
    name: '直接访问'
  }];
  export const config_gauge = {
    type: "chart", //组件
    chart: "gauge", //图表类型
    remark: null, //备注
    click: false, //点击事件
    updateWay: "refresh", //刷新方式----重新渲染
    tooltip: "type1",
    backgroundColor: "#ffffff",
    title: {
      isShow: true,
      text: null,
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      locationX: "center",
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
    axisTick: {
      color: "#000"
    },
    gaugeColor:'#18c8ff',
    series: {
      name: "111",
      radius: 80, //大小
      finishColor: "#2d99e2", //type1,type3独有
      isAxisLabel: true,
      isShow:true,
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      axisLabel: [
        {
          label: "",
          value: 60,
          calculate: "<",
          color: "#E43F3D"
        },
        {
          label: "",
          value: 80,
          calculate: "<=",
          color: "#E98E2C"
        },
        {
          label: "",
          value: 90,
          calculate: ">=",
          color: "#DDBD4D"
        }
      ],
      color: "#000000",
      fontFamily: "sans-seri",
      fontSize: 12,
      width: 20,
      min: 0,
      max: 100,
      axisTick: {
        splitNumber: 5
      },
      splitLine: {
        show: true
      },
      axisLabel: {
        show: true
      },
      splitNumber: 5,
      pointer: {
        isShow: true,
        length: 80,
        width: 8
      }
    }
  };
  