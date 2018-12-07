/* 漏斗图 */
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
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          legend: {
            show: config.legend.isShow,
            type: config.legend.type,
            orient: config.legend.orient,
            x: config.legend.locationX,
            y: config.legend.locationY,
            data: data.nameArr,
            textStyle: {
              color: config.legend.color,
              fontFamily: config.legend.fontFamily,
              fontSize: config.legend.fontSize,
            }
          },
          color: config.color,
          backgroundColor: config.backgroundColor,
    };
    return option
  }
}
