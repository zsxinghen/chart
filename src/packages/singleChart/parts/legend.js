export const setLegend = (config) => {
  return {
    show: config.legend.isShow,
    type: config.legend.type,
    orient: config.legend.orient,
    x: config.legend.locationx,
    y: config.legend.locationY,
    data: [],
    textStyle: {
      color: config.legend.color,
      fontFamily: config.legend.fontFamily,
      fontSize: config.legend.fontSize,
    }
  }
}
