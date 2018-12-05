<template>
  <div class="config-common">
    <div class="config box">
      <div class="config-title">图表标题</div>
      <el-input v-model="config.title.text" placeholder="未命名图表名称"></el-input>
    </div>
     <div class="config box">
      <div class="config-title">图表备注</div>
      <el-input v-model="config.title.remark" placeholder="请输入图表备注"></el-input>
    </div>
    <div class="config chart" v-if="chartArr.length">
      <div class="config-title">图表类型</div>
      <ul class="clearfix">
        <li v-for="item in chartArr" :key="item.chart" :class="[{'active':chartType===item.chart}, {'disabled':chartType===item.chart}]"
          @click="setType(item)">
          <el-tooltip class="item" effect="dark" :content="item.name" placement="top-start">
            <i :class="'iconfont '+item.icon"></i>
          </el-tooltip>
        </li>
      </ul>
    </div>
    <div class="config collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="基础样式" name="1">
          <basic-config :config="config"></basic-config>
        </el-collapse-item>
        <el-collapse-item title="样式配置" name="2">
          <style-config :config="config"></style-config>
        </el-collapse-item>
        <el-collapse-item title="组件配置" name="3">
           <plugin-config :config="config"></plugin-config>
        </el-collapse-item>
      </el-collapse>
    </div>
     <!-- 图表配置内容 -->
      <div class="config bottom">
        <el-button type="text">事件配置</el-button>
        <el-button type="text">监听参数</el-button>
        <el-button type="text">更新配置</el-button>
      </div>
  </div>

</template>
<script>
import BasicConfig from "./configs/BasicConfig.vue";
import StyleConfig from "./configs/StyleConfig.vue";
import PluginConfig from "./configs/PluginConfig.vue";
import Models from "./configs/Models.vue";
export default {
  name: "configCommon",
  data() {
    return {
      chartType: "pie",
      activeName: "1"
    };
  },
  components: {
    BasicConfig,
    StyleConfig,
    PluginConfig,
    Models
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    },
    chartArr: {
      required: true,
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted() {
    this.setCollapseHeight();
    window.onresize = () => {
      this.setCollapseHeight();
    };
  },
  updated(){
  },
  methods: {
    setCollapseHeight() {
      let height = document.getElementsByClassName("el-collapse")[0]
        .clientHeight;
      let arr = document.querySelectorAll(".el-collapse-item__content");
      arr.forEach(element => {
        element.style.height = height - 142 + "px";
      });
    },
    setType(item) {
      this.chartType = item.chart;
    }
  }
};
</script>
