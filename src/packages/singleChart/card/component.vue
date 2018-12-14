<template>
  <div class="config-card">
    <div class="config-li">
      <!-- 1到2组数据 -->
      <div class="config-title">指标卡配置</div>
      <el-checkbox v-model.lazy="config.isLink">跳转</el-checkbox>
      <el-input v-model.lazy="config.linkUrl" placeholder="请输入跳转地址 " style="width:100%"></el-input>
      <div style="margin-left:16px;height:28px;line-height:28px">
        <el-radio v-model="config.linkType" label="current">当前页面</el-radio>
        <el-radio v-model="config.linkType" label="new">新开页面</el-radio>
      </div>
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
  }
};
</script>
<style lang="less">
.config-card {
  .el-input__inner {
    width: 100% !important;
  }
}
</style>
