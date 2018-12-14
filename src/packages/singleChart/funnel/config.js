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
            fontSize: config.title.fontSize
          }
        },
        tooltip: {
          trigger: "item",
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
            fontSize: config.legend.fontSize
          }
        },
        color: config.color,
        calculable: true,
        backgroundColor: config.backgroundColor,
        series: {
          name: config.series.name,
          type: 'funnel',
          left: '10%',
          top: 60,
          funnelAlign: config.series.funnelAlign,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: config.series.minSize+'%',
          maxSize: config.series.maxSize+'%',
          sort: 'descending',
          gap: config.series.gap,
          label: {
            normal: {
              show: true,
              position: config.series.position
            },
            emphasis: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          labelLine: {
            normal: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1
            }
          },
          data: data.valArr,
        }
      };
      return option;
    }
  };
  