/* 雷达图 */
export default {
    setVisualMap(config) {
      if (config.visualMap.status == 'off') {
        return null
      } else {
        let obj = Object.create({})
        if (config.visualMap.type == 'continuous') {
          obj = {
            min: config.visualMap.min,
            max: config.visualMap.max,
            type: 'continuous',
            calculable: true,
            // inverse: true,
            show: config.visualMap.isShow,
            color: config.visualMap.color,
            bottom: 20,
            outOfRange: {
              color: '#bbb'
            },
          }
        } else {
          let arr = config.visualMap.pieces.map(val => {
            return {
              gt: val.min,
              lte: val.max,
              color: val.color
            }
          })
          obj = {
            type: 'piecewise',
            pieces: arr,
            show: config.visualMap.isShow,
            bottom: 20,
            outOfRange: {
              color: '#bbb'
            }
          }
        }
        return {
          visualMap: obj
        }
      }
    },
    setAreaStyle(config) {
      if (config.series.isAreaStyle) {
        return {
          areaStyle: {
            type: config.series.isAreaStyle ? 'default' : null,
            opacity: config.series.opacity / 100,
          }
        }
      } else {
        return null
      }
  
    },
    setOption(config, data) {
      let option = {
        tooltip: {},
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
        radar: {
          radius: config.series.radius + '%',
          indicator: config.radar.indicator,
          splitNumber: 3,
          center: ['50%', '50%'],
          name: {
            formatter: '{value}',
            textStyle: {
              color: config.series.color,
              fontFamily: config.series.fontFamily,
              fontSize: config.series.fontSize,
            }
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(0, 0, 0, 0)',
                'rgba(87, 203, 204, 0.2)', 'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'
              ],
              shadowColor: 'rgba(255, 255, 255, 1)',
              shadowBlur: 40
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: config.radar.lineType,
              color: config.radar.color
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: config.radar.lineType,
              color: config.radar.color
            }
          },
        },
        series: [{
          name: config.series.name,
          type: 'radar',
          data: data,
          animation: false,
          itemStyle: {
            normal: {
              ...this.setAreaStyle(config),
            }
          },
          lineStyle: {
            normal: {
              type: config.lineType
            }
          },
          label: {
            show: config.series.isShow,
            color: config.series.color,
            fontFamily: config.series.fontFamily,
            fontSize: config.series.fontSize,
          },
        }],
        ...this.setVisualMap(config),
      };
      return option
  
    }
  }
  