/* 柱状图 */
var echarts = require("echarts");
export default {
  setGrid(config) {
    if (config.dataZoom.isAble) {
      return {
        left: config.grid.left + '%',
        right: config.grid.right + '%',
        top: 58,
        "bottom": 58,
      }
    } else {
      return {
        left: config.grid.left + '%',
        right: config.grid.right + '%',
        top: 58
      }
    }

  },
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
          // inverse:true,
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
  setDataZoom(config) { //只支持x轴缩放，y轴缩放显示有问题
    let arr = [];
    if (config.dataZoom.x) {
      arr.push({
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty'
      }, {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty'
      })
    }
    if (config.dataZoom.y) {
      arr.push({
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty'
      }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty'
      })
    }

    if (arr.length) {
      return arr
    } else {
      return null
    }
  },
  setToolTip(config) {
    if (config.tooltip == "type1") {
      return {} //显示一个
    } else if (config.tooltip == "type2") {
      return {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      }
    }
  },
  setXAxis(config, data) {
    let xAxis = {
      show: true,
      type: config.barType == 'xBar' ? 'category' : 'value',
      name: config.xAxis.name,
      nameTextStyle: {
        color: config.xAxis.color,
        fontFamily: config.xAxis.fontFamily,
        fontSize: config.xAxis.fontSize + 4,
      },
      splitLine: {
        show: config.xAxis.splitLine,
      },
      axisTick: {
        show: config.xAxis.axisLine,
      },
      axisLine: {
        show: config.xAxis.axisLine,
        lineStyle: {
          color: config.xAxis.lineColor,
          width: config.xAxis.lineWidth,
        }
      },
      axisLabel: {
        show: config.xAxis.axisLabel,
        color: config.xAxis.color,
        fontFamily: config.xAxis.fontFamily,
        fontSize: config.xAxis.fontSize,
      }
    }
    if (config.barType == 'yBar') {
      let axis = {
        ...xAxis,
        ...this.setBarType(config, 'xAxis', data)
      }
      return axis
    } else {
      return {
        ...xAxis,
        data: data.xArr
      }
    }
  },

  setYAxis(config, data) {
    let YAxis = {
      type: config.barType == 'xBar' ? 'value' : 'category',
      // max: config.yAxis.max,
      show: config.yAxis.isShow,
      name: config.yAxis.name,
      data: config.yAxis.data,

      nameTextStyle: {
        color: config.yAxis.color,
        fontFamily: config.yAxis.fontFamily,
        fontSize: config.yAxis.fontSize + 4,
      },
      splitLine: {
        show: config.yAxis.splitLine
      },
      axisTick: {
        show: config.yAxis.axisLine,
      },
      axisLine: {
        show: config.yAxis.axisLine,
        lineStyle: {
          color: config.yAxis.lineColor,
          width: config.yAxis.lineWidth,
        }
      },
      axisLabel: {
        show: config.yAxis.axisLabel,
        color: config.yAxis.color,
        fontFamily: config.yAxis.fontFamily,
        fontSize: config.yAxis.fontSize,
      }
    }
    if (config.barType == 'xBar') {
      let axis = {
        ...YAxis,
        ...this.setBarType(config, 'yAxis', data),
      }
      return axis
    } else {
      return {
        ...YAxis,
        data: data.xArr
      }
    }


  },
  setMarkLine(config) {
    let arr = [];
    if (config.series.markLine_average) {
      arr.push({
        type: 'average',
        name: '平均值'
      })
    }
    if (config.series.markLine_max) {
      arr.push([{
        symbol: 'none',
        x: '90%',
        yAxis: 'max'
      }, {
        symbol: 'circle',
        label: {
          normal: {
            position: 'start',
            formatter: '最大值'
          }
        },
        type: 'max',
        name: '最高点'
      }])
    }
    if (config.series.markLine_min) {
      arr.push([{
        symbol: 'none',
        x: '90%',
        yAxis: 'min'
      }, {
        symbol: 'circle',
        label: {
          normal: {
            position: 'start',
            formatter: '最小值'
          }
        },
        type: 'min',
        name: '最低点'
      }])
    }
    return {
      data: arr
    }
  },
  setBarType(config, type, data) {
    return {
      min: config[type].min,
      splitNumber: config[type].splitNumber
    }
  },
  setSeries(config, data) {
    let arr = [];
    if (data.length == 0) {
      return []
    }
    for (let i in data.valArr) {
      let obj = {
        name: data.nameArr[i],
        type: 'bar',
        barWidth: config.series.barWidth,
        data: data.valArr[i],
        stack: config.series.isStack,
        label: {
          normal: {
            show: config.series.isShow,
            position: 'top',
            textStyle: {
              color: config.series.color,
              fontFamily: config.series.fontFamily,
              fontSize: config.series.fontSize,
            }
          }
        },
        itemStyle: {
          emphasis: {
            barBorderWidth: 1,
            shadowBlur: 4,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
          }
        },
        markLine: this.setMarkLine(config)
      }
      arr.push(obj);
    }
    return arr
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
      large :true,
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
      grid: this.setGrid(config),
      dataZoom: this.setDataZoom(config),
      tooltip: this.setToolTip(config),
      ...this.setVisualMap(config),
      xAxis: this.setXAxis(config, data),
      yAxis: this.setYAxis(config, data),
      series: this.setSeries(config, data)
    };
    return option

  }
}
