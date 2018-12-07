/* 饼图 */
export default {
  setRadius(config) {
    if (config.pieType == "type1") {
      return [0, config.series.range]
    } else if (config.pieType == "type2") {
      return [config.series.inRange + '%', config.series.outRange + '%']
    } else if (config.pieType == "type3") {
      return [config.series.inRange + '%', config.series.outRange + '%']
    }
  },
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
        formatter: "{a} <br/>{b} : {c} ({d}%)"
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
      selectedMode: config.selectedMode,
      color: config.color,
      backgroundColor: config.backgroundColor,
      series: {
        name: config.series.name||" ",
        type: 'pie',
        radius: this.setRadius(config),
        center: config.series.center,
        roseType: config.pieType == "type3" ? 'radius' : false,
        data: data.valArr,
        label: {
          show: config.series.isShow,
          normal: {
            textStyle: {
              color: config.series.color,
              fontFamily: config.series.fontFamily,
              fontSize: config.series.fontSize,
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        animationType: config.animation,
      }
    }
    return option
  },
}
