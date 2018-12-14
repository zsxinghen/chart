/* 仪表盘 */
export default {
    setShape(config) {
      switch (config.gaugeShape) {
        case "shape1":
          return [90, -269.9];
          break;
        case "shape2":
          return [225, -45];
  
          break;
        case "shape3":
          return [180, 0];
          break;
        case "shape4":
          return [140, -140];
          break;
        case "shape5":
          return [320, -320];
          break;
      }
    },
    setType2(config, data) {
      return {
        name: config.series.name,
        type: "gauge",
        splitNumber: 0, //刻度数量
        startAngle: this.setShape(config)[0], //总的360，设置180就是半圆
        endAngle: this.setShape(config)[1],
        radius: config.series.radius - 20 + "%",
        min: config.series.min,
        center: ["50%", "55%"],
        max: config.series.max,
        axisLine: {
          show: false,
          lineStyle: {
            // color: color,
            width: 6
          }
        },
        detail: {
          show: false,
          offsetCenter: [0, "-30%"],
          fontSize: 35,
          fontWeight: 700
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        pointer: {
          show: false
        },
        data: data.map(val => {
          return { value: val.value };
        })
      };
    },
    setType3(config, data) {
      return {
        type: "gauge",
        startAngle: this.setShape(config)[0], //总的360，设置180就是半圆
        endAngle: this.setShape(config)[1],
        radius: config.series.radius + 10 + "%",
        min: config.series.min,
        max: config.series.max,
        center: ["50%", "55%"],
        splitNumber: config.series.splitNumber,
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: [[1, config.axisTick.color]]
          }
        }, //仪表盘轴线
        axisLabel: {
          show: true,
          color: config.axisTick.color,
          distance: 30
        }, //刻度标签。
        axisTick: {
          show: true,
          splitNumber: config.series.axisTick.splitNumber + 1,
          lineStyle: {
            color: config.axisTick.color,
            width: 1
          },
          length: -8
        }, //刻度样式
        splitLine: {
          show: true,
          length: -20,
          lineStyle: {
            color: config.axisTick.color
          }
        }, //分隔线样式
        detail: {
          show: false
        },
        pointer: {
          show: false
        }
      };
    },
    setType4(config, data) {
      return {
        type: "gauge", //刻度轴表盘
        center: ["50%", "55%"],
        startAngle: this.setShape(config)[0], //总的360，设置180就是半圆
        endAngle: this.setShape(config)[1],
        radius: config.series.radius + "%",
        min: config.series.min,
        max: config.series.max,
        splitNumber: config.series.splitNumber,
        axisLine: {
          //刻度的线条
          show: true,
          lineStyle: {
            width: 15, //定义一个宽15的数轴
            color: [
              //颜色为渐变色
              [
                data[0].value / (config.series.max - config.series.min),
                config.series.gaugeColor
              ],
              [1, "#bfcbd9"]
            ]
          }
        },
        //分隔线样式。
        splitLine: {
          //表盘上的轴线
          show: config.series.splitLine.show
        },
        axisLabel: {
          //表盘上的刻度数值文字
          show: config.series.axisLabel.show
        },
        axisTick: {
          //表盘上的刻度线
          show: config.series.axisTick.isShow,
          splitNumber: config.series.axisTick.splitNumber + 1
        },
        pointer: {
          //表盘上的指针
          show: config.series.pointer.isShow,
          width: config.series.pointer.width,
          length: config.series.pointer.length
        },
        itemStyle: {
          //表盘指针的颜色
          color: config.series.gaugeColor
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          show: config.series.isShow,
          color: config.series.color,
          fontFamily: config.series.fontFamily,
          fontSize: config.series.fontSize
          // offsetCenter: [0, "40%"]
        },
        //仪表盘详情，用于显示数据。
        detail: {
          show: true,
          offsetCenter: [0, "16%"],
          color: "#ffffff",
          formatter: function(params) {
            return params;
          },
          textStyle: {
            fontSize: 30
          }
        },
        data: data
      };
    },
    setSeries(config, data) {
      return {
        name: config.series.name,
        type: "gauge",
        detail: {
          formatter: "{value}%"
        },
        center: ["50%", "55%"],
        startAngle: this.setShape(config)[0], //总的360，设置180就是半圆
        endAngle: this.setShape(config)[1],
        radius: config.series.radius + "%",
        min: config.series.min,
        max: config.series.max,
        axisLine: {
          lineStyle: {
            // color: color,
            width: 15
          }
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          show: config.series.isShow,
          color: config.series.color,
          fontFamily: config.series.fontFamily,
          fontSize: config.series.fontSize
          // offsetCenter: [0, "40%"]
        },
        axisLabel: {
          show: config.series.axisLabel.show
        },
        splitNumber: config.series.splitNumber,
        splitLine: {
          show: config.series.splitLine.show
        },
        axisTick: {
          show: config.series.axisTick.isShow,
          splitNumber: config.series.axisTick.splitNumber + 1
        },
        pointer: {
          show: config.series.pointer.isShow,
          width: config.series.pointer.width,
          length: config.series.pointer.length
        },
        axisLine: {
          show: config.series.axisTick.isShow
        },
        detail: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: "bolder",
          fontSize: 40,
          offsetCenter: [0, "20%"]
        },
        data: data
      };
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
            fontSize: config.title.fontSize
          }
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        backgroundColor: config.backgroundColor,
        series: []
      };
      let series = this.setSeries(config, data);
      if (config.gaugeType == "type2") {
        option.series.push(series);
        option.series.push(this.setType2(config, data));
      } else if (config.gaugeType == "type3") {
        option.series.push(series);
        option.series.push(this.setType3(config, data));
      } else if (config.gaugeType == "type4") {
        option.series.push(this.setType4(config, data));
      } else {
        option.series.push(series);
      }
      return option;
    }
  };
  