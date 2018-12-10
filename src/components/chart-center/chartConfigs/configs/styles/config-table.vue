<template>
      <div class="config-table">
    <div class="config-li">
        <!-- 1到2组数据 -->
      <div class="config-title">边框设置</div>
     
    </div>
        <div class="config-li">
        <!-- 1到2组数据 -->
      <div class="config-title">位置</div>
        头部位置   头部背景
        主体位置   主体背景
    </div>
     <el-checkbox v-model="config.series.smooth">合并同类单元格</el-checkbox>
     <el-checkbox v-model="config.series.smooth">添加序列</el-checkbox>

   
  </div>
</template>