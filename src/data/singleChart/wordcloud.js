/* 词云 
name 展现的值
value 值越大，词云字体越大
注：渲染速度略慢，待解决,点击需要
*/

export const data_wordcloud = [{ //list
    "name": "花鸟市场",
    "value": 1446
  },
  {
    "name": "汽车",
    "value": 928
  },
  {
    "name": "视频",
    "value": 906
  },
  {
    "name": "电视",
    "value": 825
  },
];
export const config_wordcloud = {
  type: "chart",     //组件
  chart: "wordcloud",//图表类型
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
  // 颜色
  color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
  backgroundColor: "#ffffff",
  series: {
    maskImage: '',
    color: ['#27D38A', '#FFCA1C', '#5DD1FA', '#F88E25', '#47A0FF', '#FD6565'],
  }
};
