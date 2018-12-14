/* 词云 */
export default {
    setMaskImage(config) {
      if (config.maskImage) {
        let maskImage = new Image();
        maskImage.src = config.maskImage
        return {
          maskImage: maskImage
        }
      } else {
        return {};
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
        tooltip: {},
        backgroundColor: config.backgroundColor,
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: 'circle',
          ...this.setMaskImage(config),
          textStyle: {
            normal: {
              color: (v) => {
                let color = config.color;
                if (v.dataIndex > color.length - 1) {
                  let num = Math.floor(Math.random() * 10);
                  return color[num];
  
                } else {
                  return color[v.dataIndex];
                }
  
              }
            },
            emphasis: {
              shadowBlur: 2,
              shadowColor: '#333'
            }
          },
          data: data
        }]
      };
      return option;
    }
  };
  