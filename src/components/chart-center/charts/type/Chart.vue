<template>
      <div :id='id' class="my-bi-chart"></div>
</template>
<script>
// import echarts from "echarts";
import { default as $set } from "../../../../packages/index";
import { setTimeout } from "timers";
var echarts = require("echarts");
require("echarts-wordcloud");
require("echarts-liquidfill");
export default {
  data() {
    return {
      chart: null
    };
  },
  props: {
    id: {
      type: String,
      default() {
        return {};
      }
    },
    config: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    this.init();
    this.$root.eventHub.$on("myJJ", param => {
      this.getData(param);
    });
  },
  methods: {
    init() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.off("click"); // 处理点击事件多次触发
      let option = $set[`${this.config.chart}`].setOption(
        this.config.settings,
        this.config.data
      );
      this.chart.clear(); //清空当前实例，会移除实例中所有的组件和图表
      this.chart.hideLoading(); //隐藏动画加载效果。
      this.chart.setOption(option);
      this.resize(this.chart);
      this.chart.on("click", param => {
        this.$root.eventHub.$emit("myDD", param.name);
      });
    },
    //图表自适应容器宽高
    resize(chart) {
      let time = null;
      window.addEventListener("resize", () => {
        chart.resize();
      });
      $(".effect" + this.id + ">.vue-resizable-handle")
        .mousedown(function() {
          time = setInterval(function() {
            chart.resize();
          }, 100);
        })
        .mouseup(function() {
          clearInterval(time);
          chart.resize();
        });
    }
  },
  watch: {
    "config.settings": {
      //根据数据变动，重新渲染页面图表
      deep: true,
      handler() {
        if (this.id == "my") {
          //变更图表数据
          let option = $set[`${this.config.chart}`].setOption(
            this.config.settings,
            this.config.data
          );
          console.log(JSON.stringify(option))
          this.chart.clear(); //清空当前实例，会移除实例中所有的组件和图表
          this.chart.setOption(option);
        } else {
          if (this.config.settings.updateWay == "refresh") {
            //重新渲染图表
            this.init();
          } else {
            //变更图表数据
            let option = $set[`${this.config.chart}`].setOption(
              this.config.settings,
              this.config.data
            );
            
            this.chart.setOption(option);
          }
        }
      }
    }
  }
};
</script>
<style lang="less">
.my-bi-chart {
  position: absolute !important;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

