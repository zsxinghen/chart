export const setXAxis = (config) => {
  return {
    type: 'category',
    name: config.xAxis.name,
    nameTextStyle: {
      color: config.xAxis.color,
      fontFamily: config.xAxis.fontFamily,
      fontSize: config.xAxis.fontSize + 4,
    },
    data: [],
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
      rotate: config.xAxis.rotate,
      fontFamily: config.xAxis.fontFamily,
      fontSize: config.xAxis.fontSize,
    }
  }
}
