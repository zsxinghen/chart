/* 
报表公共部分
**
标题：title
颜色：color
背景：backgroundColor
网格：grid
** 
*/
export const common = (config) => {
  let arr = [{
      left: config.grid.left + '%',
      top: 58,
      bottom: 58,
    },
    {
      left: config.grid.left + '%',
      bottom: 58,
    }
  ];
  let grid = config.dataZoom&&config.dataZoom.isAble ? arr[0] : arr[1];
  return {
    title: {
      text: config.title.text,
      subtext: config.title.subtext,
      x: config.title.locationx,
      y: config.title.locationY,
      textStyle: {
        color: config.title.color,
        fontFamily: config.title.fontFamily,
        fontSize: config.title.fontSize,
      }
    },
    color: config.color,
    backgroundColor: config.backgroundColor,
    grid: grid
  }
}
