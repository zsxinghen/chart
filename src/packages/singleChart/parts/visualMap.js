// visualMap: {
//   show 
//   isCustom 
//   type           piecewise--分段型    continuous --- 连续型
//   min            最小值
//   max            最大值
//   textArr        两端的文本
//   colorArr       颜色
//   orient         horizontal--水平     vertical--竖直

/* pieces   自定义『分段式视觉映射组件（visualMapPiecewise）』 */
//   rangeArr      范围内数组   [{gt: 0,lte: 50,color: '#096'}]
//   outOfRange   范围外对象  {color: '#999'}
// }

export const visualMap = (config) => {
  if (config.visualMap.show && config.visualMap.isCustom) {
    return {
      show: config.visualMap.show,
      type: config.visualMap.type,
      min: config.visualMap.min,
      max: config.visualMap.max,
      text: config.visualMap.textArr,
      realtime: true,
      inverse: false,
      color: config.visualMap.colorArr,
      orient: config.visualMap.orient,
    }
  } else {
    return {
      show: config.visualMap.show,
      pieces: config.visualMap.rangeArr,
      outOfRange: {
        color: config.visualMap.outOfRange
      },
      orient: config.visualMap.orient,
    }
  }
};
