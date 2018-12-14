/* 柱状图 */
export const data_bar = {
    nameArr: ["女", "男", "平均"],
    xArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    valArr: [
      [
        { x: 1, value: 1, name: "女" },
        { x: 2, value: 2, name: "女" },
        { x: 3, value: 3, name: "女" },
        { x: 4, value: 4, name: "女" },
        { x: 5, value: 5, name: "女" },
        { x: 6, value: 6, name: "女" },
        { x: 1, value: 1, name: "女" },
        { x: 1, value: 1, name: "女" }
      ],
      [
        { x: 1, value: 1, name: "男" },
        { x: 2, value: 2, name: "男" },
        { x: 3, value: 3, name: "男" },
        { x: 4, value: 4, name: "男" },
        { x: 5, value: 5, name: "男" },
        { x: 6, value: 6, name: "男" },
        { x: 1, value: 1, name: "男" },
        { x: 1, value: 2, name: "男" }
      ]
    ]
  };;
  export const config_bar = {
    type: "chart", //组件
    chart: "bar", //图表类型
    remark: null, //备注
    click: false, //点击事件
    tooltip: 'type1',
    updateWay: "refresh", //刷新方式----重新渲染
    barType: "xBar",
    dataZoom: {
      isAble: true,
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
      isStack: false,
      fontSize: 12,
      barWidth: "",
      markLine_average: false,
      markLine_max: false,
      markLine_min: false,
    },
    xAxis: {
      isShow: true,
      color: "#000000",
      lineColor: "#000000",
      lineWidth: 1,
      min: null,
      splitNumber: 5,
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
      splitNumber: 5,
      lineColor: "#000000",
      lineWidth: 1,
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      splitLine: true, //分割线
      axisLine: true, //坐标轴线
      axisLabel: true //坐标标签
    },
  };
  