<template>
      <div id='id'></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
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
    //获取数据
    getData(param) {
      this.init();
    },
    init(data) {
      let chart = echarts.init(document.getElementById(id));
      chart.off("click"); // 处理点击事件多次触发
      let option = this.setOption();
      chart.clear(); //清空当前实例，会移除实例中所有的组件和图表
      chart.hideLoading(); //隐藏动画加载效果。
      chart.setOption(option);
      this.resize(chart);
      chart.on("click", param => {
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
  }
};
</script>
<style lang="less">
.chart {
  position: absolute !important;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

