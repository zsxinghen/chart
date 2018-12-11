<template>
  <div class="config-card">
    <div class="config-li">
        <!-- 1到2组数据 -->
      <div class="config-title">布局</div>
          <div style="padding-left:14px">
        散点种类：<el-select v-model="config.series.symbol" placeholder="请选择" size="mini" :disabled="!config.xAxis.axisLine">
          <el-option label="左右" value="circle"></el-option>
          <el-option label="上下" value="rect"></el-option>
          <el-option label="大小" value="roundRect"></el-option>
        </el-select>
      </div>
    </div>
      <div class="config-li">
        <!-- 1到2组数据 -->
      <div class="config-title">页面跳转</div>
        新开页面或当期页面
    </div>
  </div>
</template>