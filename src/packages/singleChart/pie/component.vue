<template>
  <div class="config-pie">
    <div class="config-li">
      <div class="config-title">饼图类型</div>
      <div style="margin-left:14px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.pieType" label="type1">类型1</el-radio>
        <el-radio v-model.lazy="config.pieType" label="type2">类型2</el-radio>
        <el-radio v-model.lazy="config.pieType" label="type3">类型3</el-radio>
      </div>
    </div>
     <div class="config-li">
      <div class="config-title">饼图半径</div>
       <div style="margin-left:14px;">
     <div v-show="config.pieType!= 'type1'">内径：<el-input-number v-model.lazy="config.series.inRange" controls-position="right" :controls="false" size="medium"
          style="width:180px;"></el-input-number>%</div>
      <div v-show="config.pieType!= 'type1'">外径：<el-input-number v-model.lazy="config.series.outRange" controls-position="right" :controls="false" size="medium"
          style="width:180px;"></el-input-number>%</div>
    
       <div v-show="config.pieType== 'type1'">半径：<el-input-number v-model.lazy="config.series.range" controls-position="right" :controls="false" size="medium"
          ></el-input-number></div> 
       </div>
    </div>
    <div class="config-li">
      <div class="config-title">选中模式</div>
      <div style="margin-left:16px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.selectedMode" label="single">单选</el-radio>
        <el-radio v-model.lazy="config.selectedMode" label="multiple">多选</el-radio>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">提示名称</div>
      <el-input v-model.lazy="config.series.name" placeholder="请输入名称"></el-input>
    </div>
    <div class="config-li">
      <div class="config-title">动画方式</div>
      <div style="margin-left:16px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.animation" label="expansion">展开</el-radio>
        <el-radio v-model.lazy="config.animation" label="scale">缩放</el-radio>
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
