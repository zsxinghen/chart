<template>
  <el-form :model="config" ref="form" label-width="82px" label-position="left" style="margin-left:22px;">
    <el-form-item label="图表类型：" style="margin-bottom:0">
      <el-select v-model="config.pieType"  placeholder="请选择" size="mini">
        <el-option label="类型1" value="type1"></el-option>
        <el-option label="类型2" value="type2"></el-option>
        <el-option label="类型3" value="type3"></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="图表动画：" style="margin-bottom:0">
      <el-select v-model="config.animation.type"  placeholder="请选择" size="mini">
        <el-option v-for="item in animationType" :key="item.value" :label="item.name" :value="item.value">
        </el-option>
      </el-select>
    </el-form-item> -->
    <el-form-item label="内径：" style="margin-bottom:0" v-if="config.pieType!= 'type1'">
      <el-input-number v-model="config.series.inRange"  controls-position="right" :controls="false" 
        placeholder="请输入值" size="medium"  ></el-input-number>%
    </el-form-item>
    <el-form-item :label="config.pieType!= 'type1'?'外径':'半径'" style="margin-bottom:0">
      <el-input-number v-model="config.series.outRange"  controls-position="right" :controls="false" 
        placeholder="请输入值" size="medium" ></el-input-number>%
    </el-form-item>
    <el-form-item label="名称：" style="margin-bottom:0">
      <el-input v-model="config.series.name" @blur="" :maxlength="10" placeholder="请输入名称" size="medium"
        style=" width: 150px!important;"></el-input>
    </el-form-item>
  </el-form>
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
  mounted() {
    console.log(this.config);
  },
  methods: {}
};
</script>

