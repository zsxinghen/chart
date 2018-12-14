/* 雷达图 */
export const data_radar = [
    {
      value: [28, 36, 12, 68, 232, 336, 458, 569, 165, 146, 87, 35],
      name: "施工数量"
    },
    {
      value: [289, 356, 12, 16, 23, 36, 58, 69, 126, 246, 355, 466],
      name: "竣工数量"
    }
  ];
  export const config_radar = {
    type: "chart", //组件
    chart: "radar", //图表类型
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
      left: 10
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
    // 颜色
    color: [
      "#c23531",
      "#2f4554",
      "#61a0a8",
      "#d48265",
      "#91c7ae",
      "#749f83",
      "#ca8622",
      "#bda29a",
      "#6e7074",
      "#546570",
      "#c4ccd3"
    ],
    backgroundColor: "#ffffff",
    visualMap: {
      show: false,
      top: "middle",
      right: 10,
      color: ["red", "yellow"],
      calculable: true
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
    radar:{
      lineType:'solid',
      color:'rgba(208, 196, 196, 1)',
      indicator:[{},{},{}],
    },
    series: {
      splitNumber: 5,
      indicator: [],
      opacity:50,
      isAreaStyle:true,
      radius:60,
      shape: "circle",
      lineStyle: {
        type: "dashed"
      },
      areaStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    }
  };
  