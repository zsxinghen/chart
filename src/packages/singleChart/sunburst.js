/* 旭日图 */
// import {common} from './parts/common/js';
// import {visualMap} form './parts/visualMap.js';
// import {tooltip} form './parts/tooltip.js';
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
      backgroundColor: config.backgroundColor,
      color: config.color,
      tooltip: {},
      ...this.setVisualMap(config),
      series: {
        name: config.series.name,
        type: 'sunburst',
        highlightPolicy: config.series.highlightPolicy,
        data: data,
        itemStyle: {
          borderColor: config.borderColor,
          borderWidth: 2
        },
        radius: [config.series.inRange + '%', config.series.outRange + '%'],
        label: {
          show: config.series.isShow,
          rotate: 'radial',
          color: config.series.color,
          fontFamily: config.series.fontFamliy,
          fontSize: config.series.fontSize,
        },
        animation:false,
      }
    };
    return option

  }
}
