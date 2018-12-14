<template>
  <div class="config-scatter">
    <div class="config-li">
      <div class="config-title">散点类型</div>
      <div>
        <el-checkbox v-model="config.series.type">动画</el-checkbox>
      </div>
      <div style="padding-left:14px">
        散点种类：<el-select v-model="config.series.symbol" placeholder="请选择" size="mini" :disabled="!config.xAxis.axisLine">
          <el-option label="圆" value="circle"></el-option>
          <el-option label="矩形" value="rect"></el-option>
          <el-option label="圆角矩形" value="roundRect"></el-option>
          <el-option label="三角形" value="triangle"></el-option>
          <el-option label="棱形" value="diamond"></el-option>
          <el-option label="箭头" value="arrow"></el-option>
        </el-select>
      </div>
    </div>
    <div>
      <div class="config-li">
        <div class="config-title">散点尺寸</div>
        <div style="margin-left:14px;height:28px;line-height:28px">
          <el-radio v-model.lazy="config.series.sizeType" label="set">固定</el-radio>
          <el-radio v-model.lazy="config.series.sizeType" label="unset">不固定</el-radio>
        </div>
        <div style="margin-left:14px;" v-if="config.series.sizeType=='set'">
          尺寸：<el-input-number v-model.lazy="config.series.size" controls-position="right" :min="0" :max="100" :controls="false"
            size="medium"></el-input-number>
        </div>
        <div style="margin-left:14px;" v-if="config.series.sizeType=='unset'">
          缩放比：<el-input-number v-model.lazy="config.series.scale" controls-position="right" :min="0" :max="100" :controls="false"
            size="medium"></el-input-number>
        </div>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">标线设置</div>
      <el-checkbox v-model="config.series.markLine_average">平均</el-checkbox>
      <el-checkbox v-model="config.series.markLine_max" style="margin-right:14px">最大</el-checkbox>
      <el-checkbox v-model="config.series.markLine_min">最小</el-checkbox>
    </div>
    <!-- X轴设置 -->
    <div class="config-li">
      <div class="config-title">X轴设置</div>
      <el-checkbox v-model="config.xAxis.axisLabel" style="margin-right:10px">标签</el-checkbox>
      <el-input v-model.lazy="config.xAxis.name" placeholder="请输入名称 " style="width:160px" slot="append"></el-input>
      <div style="margin-left:14px;">
        <word :config="config" species="xAxis"></word>
      </div>
      <el-checkbox v-model="config.xAxis.axisLine" style="margin-right:10px">坐标轴</el-checkbox>
      <div style="padding-left:8px">
        <el-select v-model="config.xAxis.lineWidth" placeholder="请选择" size="mini" :disabled="!config.xAxis.axisLine">
          <el-option v-for="item in option.lineWidth" :key="item.value" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
        <el-color-picker v-model="config.xAxis.lineColor" size="small" show-alpha :disabled="!config.xAxis.axisLine"></el-color-picker>
      </div>
      <el-checkbox v-model="config.xAxis.splitLine" style="margin-right:10px">分割线</el-checkbox>
    </div>
    <!-- Y轴设置 -->
    <div class="config-li">
      <div class="config-title">Y轴设置</div>
      <el-checkbox v-model="config.yAxis.axisLabel" style="margin-right:10px">标签</el-checkbox>
      <el-input v-model.lazy="config.yAxis.name" placeholder="请输入名称 " style="width:160px" slot="append"></el-input>
      <div style="margin-left:14px;">
        <word :config="config" species="yAxis"></word>
      </div>
      <el-checkbox v-model="config.yAxis.axisLine" style="margin-right:10px">坐标轴</el-checkbox>
      <div style="padding-left:8px">
        <el-select v-model="config.yAxis.lineWidth" placeholder="请选择" size="mini" :disabled="!config.yAxis.axisLine">
          <el-option v-for="item in option.lineWidth" :key="item.value" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
        <el-color-picker v-model="config.yAxis.lineColor" size="small" show-alpha :disabled="!config.yAxis.axisLine"></el-color-picker>
      </div>
      <el-checkbox v-model="config.yAxis.splitLine" style="margin-right:10px">分割线</el-checkbox>
      <div style="margin-left:14px;">
        最小值：<el-input-number v-model.lazy="config.yAxis.min" controls-position="right" :controls="false" size="medium"></el-input-number>
        分割数：<el-input-number v-model.lazy="config.yAxis.splitNumber" controls-position="right" :controls="false" size="medium"></el-input-number>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">偏移设置</div>
      <div style="margin-left:14px;">
        左偏移：<el-input-number v-model.lazy="config.grid.left" controls-position="right" :min="0" :max="100" :controls="false"
          size="medium"></el-input-number>
        右偏移：<el-input-number v-model.lazy="config.grid.right" controls-position="right" :min="0" :max="100" :controls="false"
          size="medium"></el-input-number>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
    import Word from "../../../components/chart-center/chartConfigs/configs/basic/Word.vue";
  export default {
    data() {
      return {
        option: {
          lineWidth: [{
              name: "1px",
              value: 1
            },
            {
              name: "2px",
              value: 2
            },
            {
              name: "3px",
              value: 3
            },
            {
              name: "4px",
              value: 4
            },
            {
              name: "5px",
              value: 5
            },
            {
              name: "6px",
              value: 6
            },
            {
              name: "7px",
              value: 7
            },
            {
              name: "8px",
              value: 8
            },
            {
              name: "9px",
              value: 9
            }
          ]
        }
      };
    },
    props: {
      config: {
        required: true,
        type: Object,
        default: () => null
      }
    },
    mounted() {},
    methods: {},
    components: {
      Word
    }
  };

</script>
<style lang="less">
  .config-scatter {

    //   .el-input__inner {
    //     width: 200px !important;
    //   }
    .el-input-number--medium {
      width: 188px;

      .el-input__inner {
        width: 100% !important;
      }
    }

    .el-checkbox+.el-checkbox {
      margin-left: 20px;
    }

    .el-input {}
  }

</style>
