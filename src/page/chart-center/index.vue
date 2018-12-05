<template>
  <div class="chart-center">
    <!-- 左边  数据部分 -->
    <div class="main left">

      <div class="div1">
        <ul>

        </ul>
      </div>
    </div>
    <!-- 中间  图表部分 -->
    <div class="main center">
      <div class="content-center">
        <div class="content header"></div>
        <div class="content chart">
          <!-- <chart id="my" :config="config"></chart> -->
        </div>
        <div class="content footer"></div>
      </div>
      <!-- 图表侧边栏 -->
      <!-- <div class="main aside">
                <ul v-if="chartTypes">
                  <li v-for="item in chartTypes" :key="item.type" :class="[{'active':chartType===item.type},{'disabled':item.disabled}]"
                    @click="setChartType(item)">
                    <el-tooltip class="item" effect="dark" :content="item.name" placement="left-start">
                      <i :class="'iconfont '+item.icon"></i>
                    </el-tooltip>
                  </li>
                </ul>
              </div> -->
    </div>
    <!-- 右边  配置部分 -->
    <div class="main right">
      <!-- 标题与数据更新方式 -->
      <configs :chartArr="chartArr" :config="config" ref="config" v-show="config.type!='model'"></configs>
    </div>
  </div>
</template>
<script>
  import chart from "../../components/chart-center/charts/index.vue";
  import configs from "../../components/chart-center/chartConfigs/index.vue";
  import {
    types
  } from "../../data/configs/chartCenter_imgConfig.js";
  export default {
    name: "chartConfigPage",
    data() {
      return {
        chartTypes: [],
        chartArr: [],
        chartType: "table",
        config: {
          type: "table",
          data: null,
          title: {},
          legend: {},
          series: {}
        }
      };
    },
    components: {
      chart,
      configs
    },
    created() {
      this.chartTypes = types;
    },
    mounted() {},
    methods: {
      /**
       *   获取报表种类
       */
      setChartType(item) {
        this.chartArr = item.children;
        this.chartType = item.type;
        this.$set(this.config, "type", item.type);
        //处理渲染延迟
        this.$nextTick(_ => {
          this.$refs.config.setCollapseHeight();
        });
      },
      allowDrop(ev) {
        // ev.preventDefault();
      },

      drag(ev) {
        // ev.dataTransfer.setData("Text", ev.target.id);
      },
      drop(ev) {
        // ev.preventDefault();
        // var data = ev.dataTransfer.getData("Text");
        // ev.target.appendChild(document.getElementById(data));
      }
    },
    /**
     *   监听并刷新图表
     */
    watch: {
      config: {
        deep: true,
        handler: () => {
          console.log(11);
        }
      }
    }
  };

</script>
<style lang="less">
  @import url("../../assets/style/chartCenter.less");
  @import url("../../assets/icon/iconfont/iconfont.css");

  #div2,
  .div1 ui li {
    width: 198px;
    height: 66px;
    padding: 10px;
    border: 1px solid #aaaaaa;
    user-select: none
  }

</style>
