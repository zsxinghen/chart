<template>
  <div class="config-pie">
    <div class="config-li">
      <div class="config-title">半径</div>
      <div style="margin-left:14px;">
        <div v-show="config.pieType!= 'type1'">内径：<el-input-number v-model.lazy="config.series.inRange"
            controls-position="right" :controls="false" size="medium" style="width:180px;" :min='0' :max="config.series.outRange"></el-input-number>%</div>
        <div v-show="config.pieType!= 'type1'">外径：<el-input-number v-model.lazy="config.series.outRange"
            controls-position="right" :controls="false" size="medium" style="width:180px;" :min='config.series.inRange' :max="100"></el-input-number>%</div>
      </div>
    </div>
    <!-- highlightPolicy 
    每一层的宽度
    层级颜色levels  -->
    <div class="config-li">
      <div class="config-title">分割线</div>
      <div style="margin-left:14px;">
          颜色: <el-color-picker v-model="config.borderColor" size="small" show-alpha></el-color-picker>
      </div>
    </div>
 
    <div class="config-li">
      <div class="config-title">提示名称</div>
      <el-input v-model.lazy="config.series.name" placeholder="请输入名称"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => null
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
.config-pie {
  .el-input__inner {
    width: 100% !important;
  }
}
</style>
