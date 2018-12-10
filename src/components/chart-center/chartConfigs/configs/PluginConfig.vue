/*
*组件配置
*/
<template>
  <div>
    <div class="config-li" v-if="config.isAxis">
      <div class="config-title">缩放显示</div>
      <el-checkbox v-model="config.settings.dataZoom.x">x轴缩放</el-checkbox>
      <el-checkbox v-model="config.settings.dataZoom.y">y轴缩放</el-checkbox>
    </div>
    <div class="config-li" v-if="config.isAxis">
      <div class="config-title">提示框显示</div>
      <div style="margin-left:16px;height:28px;line-height:28px">
        <el-radio v-model="config.settings.tooltip" label="type1">一组数据</el-radio>
        <el-radio v-model="config.settings.tooltip" label="type2">多组数据</el-radio>
      </div>
    </div>
    <div class="config-li" v-if="config.isVisualMap">
      <div class="config-title">视觉映射</div>
      <div class="config-conent">
        映射配置:<el-button type="text" icon="el-icon-setting" style="padding: 0;margin-left:10px" @click="visible.visualMap=true"></el-button>
        <visual-map :config="config.settings" :visible="visible" v-if="visible.visualMap"></visual-map>
      </div>
    </div>

    <!-- 其他
    <div class="config-li">
      <div class="config-title">视觉映射</div>
    </div> -->
  </div>
</template>
<script>
  import visualMap from "./plugins/visualMap.vue";
  export default {
    data() {
      return {
        visible: {
          visualMap: false
        }
      };
    },
    props: {
      config: {
        required: true,
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    components: {
      visualMap
    }
  };

</script>
