<template>
  <div class="config-funnel">
    <div class="config-li">
      <div class="config-title">布局设置</div>
      <div style="margin-left:14px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.series.funnelAlign" label="left">靠左</el-radio>
        <el-radio v-model.lazy="config.series.funnelAlign" label="center">居中</el-radio>
        <el-radio v-model.lazy="config.series.funnelAlign" label="right">靠右</el-radio>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">标签位置</div>
      <div style="margin-left:14px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.series.position" label="left">靠左</el-radio>
        <el-radio v-model.lazy="config.series.position" label="inside">居中</el-radio>
        <el-radio v-model.lazy="config.series.position" label="right">靠右</el-radio>
      </div>
    </div>
  
  <div class="config-li">
    <div class="config-title">间距设置</div>
    <div style="margin-left:14px;">
      <div>间&nbsp;&nbsp;&nbsp;距：<el-input-number v-model.lazy="config.series.gap" controls-position="right" :controls="false" size="medium"
          style="width:166px;"></el-input-number>
      </div>
    </div>
  </div>
  <div class="config-li">
    <div class="config-title">取值范围</div>
    <div style="margin-left:14px;">
    <div>最小值：<el-input-number v-model.lazy="config.series.minSize" controls-position="right" :controls="false" size="medium"
        style="width:166px;"></el-input-number>
    </div>
    <div>最大值：<el-input-number v-model.lazy="config.series.maxSize" controls-position="right" :controls="false" size="medium"
        style="width:166px;"></el-input-number>
    </div>
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
