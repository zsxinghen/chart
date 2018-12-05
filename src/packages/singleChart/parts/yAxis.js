export const setYAxis = (config) => {
    return {
      type: 'value',
      min: config.yAxis.min,
      max: config.yAxis.max,
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
  },
