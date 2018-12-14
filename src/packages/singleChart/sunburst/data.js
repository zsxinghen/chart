/* 旭日图 */
export const data_sunburst = [{ //tree
    name: 'Flora',
    value: 30,
    children: [{
      name: 'a',
      value: 10,
      children: []
    }, {
      name: 'b',
      value: 20,
      children: []
    }]
  }, {
    name: 'd',
    value: 10,
    children: [{
      name: 'c',
      value: 5,
      children: []
    }]
  }];
  export const config_sunburst = {
    type: "chart", //组件
    chart: "sunburst", //图表类型
    remark: null, //备注
    click: false, //点击事件
    updateWay: "refresh", //刷新方式----重新渲染
    // 颜色
    color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
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
    borderColor:"#fff",
    grid: {
      left: 10,
      right: 10,
    },
    legend: {
      isShow: false,
      data: [],
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      orient: "horizontal",
      locationX: "left",
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
      name: '',
      isShow: true,
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: 12,
      highlightPolicy: 'ancestor',
      levels: [],
      inRange:0,
      outRange:80,
    }
  };
  