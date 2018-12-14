/* 表格 */
export const data_table = {
    columns: [{
      label: "six",
      prop: "six"
    }, {
      label: "月份",
      prop: "月份"
    }, {
      label: "值",
      prop: "值"
    }],
    tableData: [{
      six: '男',
      "月份": '1',
      "值": '3.2',
    }, {
      six: '男',
      "月份": '2',
      "值": '3.2',
    }, {
      six: '女',
      "月份": '2',
      "值": '3.2',
    }, {
      six: '女',
      "月份": '3',
      "值": '3.2',
    }, {
      six: '女',
      "月份": '4',
      "值": '3.2',
    }],
  };
  export const config_table = {
    chart: "table",
    type: 'table',
    remark: "",
    combineRow: true,
    updateWay: "refresh", //刷新方式----重新渲染
    title: {
      isShow: true,
      text: null,
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: "12px",
      align: 'center'
    },
    tdColor: '#fff',
    thColor: '#fff',
    th: {
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: "12px",
    },
    td: {
      color: "#000000",
      fontFamliy: "Microsoft YaHei",
      fontSize: "12px",
      borderColor: '#dfe6ec'
    },
    color: "#000",
    isBorder: false,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: "#ffffff",
  };
  