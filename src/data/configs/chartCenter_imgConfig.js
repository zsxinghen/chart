/**
 * 定义图表的种类与图片
 */

export const types = [{ // 表格
    icon: "icon-biaoge",
    type: "table",
    name: '表单库',
    disabled: false,
    children: []
  },
  {
    type: "chart", // 图表
    icon: "icon-tubiao",
    name: '图标库',
    disabled: false,
    children: [{
        chart: 'pie', // 饼图
        name: '饼图',
        icon: "icon-zuixinICON--",
      },
      {
        chart: 'sunburst', // 旭日图
        name: '旭日图',
        icon: "icon-xuritu",
      },
      {
        chart: 'gauge', // 仪表盘
        name: '仪表盘',
        icon: "icon-yibiaopan",
      },

      {
        chart: 'funnel', // 漏斗图
        name: '漏斗图',
        icon: "icon-loudoutu",
      },
      {
        chart: 'radar', // 雷达图
        name: '雷达图',
        icon: "icon-leidatu",
      },
      {
        chart: 'graph', // 关系图
        name: '关系图',
        icon: "icon-guanxitu",
      },

      {
        chart: 'bar', // 柱状图
        name: '柱状图',
        icon: "icon-tubiaozhuzhuangtu",
      },
      {
        chart: 'line', // 折线图
        name: '折线图',
        icon: "icon-zhexiantu",
      },
      {
        chart: 'scatter', // 散点图
        name: '散点图',
        icon: "icon-sandiantu",
      },

      {
        chart: 'wordcloud', // 字符云
        name: '字符云',
        icon: "icon-zujian-zifuyun",
      },
      {
        chart: 'liquidfill', // 水球图
        name: '水球图',
        icon: "icon-fsux_tubiao_shuiqiutu",
      },
    ]
  },
  { // 地图
    icon: "icon-map_02",
    type: "map",
    name: '地图库',
    disabled: true,
    children: []
  },
  { // 卡片
    icon: "icon-qiapian",
    type: "card",
    name: '卡片库',
    disabled: false,
    children: []
  },
  { // 模板库
    icon: "icon-mobanguanli",
    name: '模板库',
    type: 'model',
    disabled: false,
  }
]
