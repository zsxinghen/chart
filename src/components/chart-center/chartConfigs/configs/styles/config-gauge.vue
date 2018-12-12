<template>
  <div class="config-gauge">
    <div class="config-li">
      <div class="config-title">仪表盘类型</div>
      <div style="padding-left:14px">
        类&nbsp;&nbsp;&nbsp;型：<el-select v-model="config.gaugeType" placeholder="请选择" size="mini">
          <el-option v-for="item in gaugeType" :key="item.value" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="padding-left:14px" v-if="config.gaugeType == 'type3'">
        <div>刻度颜色：<el-color-picker v-model="config.axisTick.color" size="small" show-alpha></el-color-picker>
        </div>
      </div>
      <div style="padding-left:14px" v-if="config.gaugeType == 'type4'">
        <div>盘面底色：<el-color-picker v-model="config.series.gaugeColor" size="small" show-alpha></el-color-picker>
        </div>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">仪表盘形状</div>
      <div style="padding-left:14px">
        形&nbsp;&nbsp;&nbsp;状：<el-select v-model="config.gaugeShape" placeholder="请选择" size="mini">
          <el-option v-for="item in gaugeShape" :key="item.value" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">盘面设置</div>

      <div style="padding-left:14px">
        <div>半&nbsp;&nbsp;&nbsp;径：<el-input-number v-model.lazy="config.series.radius" controls-position="right"
            :controls="false" size="medium" style="width:160px" :min='40'></el-input-number>
        </div>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">刻度设置</div>
      <el-checkbox v-model="config.series.axisLabel.show">显示</el-checkbox>
      <div style="padding-left:14px">
        <div>最小值：<el-input-number v-model.lazy="config.series.min" controls-position="right" style="width:160px"
            :controls="false" size="medium" :max='config.series.max'></el-input-number>
        </div>
        <div>最大值：<el-input-number v-model.lazy="config.series.max" controls-position="right" style="width:160px"
            :controls="false" size="medium" :min='config.series.min||1'></el-input-number>
        </div>

      </div>
      <div>
        <el-checkbox v-model="config.series.splitLine.show">分隔线</el-checkbox>
      </div>
      <div style="padding-left:14px">
        <div>分段数量：<el-input-number v-model.lazy="config.series.splitNumber" controls-position="right" style="width:150px"
            :controls="false" size="medium" :min="0" :max="100"></el-input-number>
        </div>
      </div>
      <el-checkbox v-model="config.series.axisTick.isShow">刻度线</el-checkbox>
      <div style="padding-left:14px">
        <div>分隔数量：<el-input-number v-model.lazy="config.series.axisTick.splitNumber" controls-position="right" style="width:150px"
            :controls="false" size="medium" :min="0" :max="100"></el-input-number>
        </div>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">指针设置</div>
      <el-checkbox v-model="config.series.pointer.isShow">显示</el-checkbox>
      <div style="padding-left:14px">
        <div>宽&nbsp;&nbsp;&nbsp;度：<el-input-number v-model.lazy="config.series.pointer.width" controls-position="right" style="width:160px"
            :controls="false" size="medium" :min='1'></el-input-number>
        </div>
        <div>长&nbsp;&nbsp;&nbsp;度：<el-input-number v-model.lazy="config.series.pointer.length" controls-position="right" style="width:160px"
            :controls="false" size="medium" :min='1'></el-input-number>
        </div>
        <div>
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
      return {
        gaugeShape: [{
            name: "圆",
            value: "shape1"
          },
          {
            name: "圆弧",
            value: "shape2"
          },
          {
            name: "半圆",
            value: "shape3"
          },
          {
            name: "缺左圆",
            value: "shape4"
          },
          {
            name: "缺右圆",
            value: "shape5"
          }
        ],
        gaugeType: [{
            name: "类型1",
            value: "type1"
          },
          {
            name: "类型2",
            value: "type2"
          },
          {
            name: "类型3",
            value: "type3"
          },
          {
            name: "类型4",
            value: "type4"
          }
        ]
      };
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
  .config-gauge {
    .el-input__inner {
      width: 100% !important;
    }

    .el-checkbox+.el-checkbox {
      margin-left: 20px;
    }
  }

</style>
