/* 仪表盘 */
export default {
  setOption(config, data) {
    let option = {
      title: {
        show: config.title.isShow,
        text: config.title.text,
        x: config.title.locationX,
        y: config.title.locationY,
        textStyle: {
          color: config.title.color,
          fontFamily: config.title.fontFamily,
          fontSize: config.title.fontSize,
        }
      },
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      backgroundColor: config.backgroundColor,
      series: [{
        name: config.series.name,
        type: 'gauge',
        detail: {
          formatter: '{value}%'
        },
        pointer: {

        },
        data: [{
          value: 50,
          name: '完成率'
        }]
      }]
    };
    return option
  }
}
