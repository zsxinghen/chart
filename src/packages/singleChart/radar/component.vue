<template>
  <div class="config-radar">
    <div class="config-li">
      <div class="config-title">填充设置</div>
      <el-checkbox v-model="config.series.isAreaStyle">填充</el-checkbox>
    </div>
    <div class="config-li">
      <div style="padding:0 14px">
        <div> 透明度:</div>
        <el-slider v-model="config.series.opacity" :max="100">
        </el-slider>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">维度设置</div>
      <div style="margin-left:14px;">
        设置： <el-button type="text" icon="el-icon-setting" style="padding: 0;margin-left:10px" @click="set"></el-button>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">边框样式</div>
      <div style="margin-left:14px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.lineType" label="solid">直线</el-radio>
        <el-radio v-model.lazy="config.lineType" label="dashed">虚线</el-radio>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">轴线样式</div>
      <div style="margin-left:14px;height:28px;line-height:28px">
        <el-radio v-model.lazy="config.radar.lineType" label="solid">直线</el-radio>
        <el-radio v-model.lazy="config.radar.lineType" label="dashed">虚线</el-radio>
      </div>
      <div style="margin-left:14px;">
        颜色: <el-color-picker v-model="config.radar.color" size="small" show-alpha></el-color-picker>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">雷达图大小</div>
      <div style="margin-left:14px;">半径：<el-input-number v-model.lazy="config.series.radius" controls-position="right" :controls="false" size="medium"
          :max="100" :min="0"></el-input-number>
      </div>
    </div>
    <el-dialog title="维度设置" :visible.sync="visible.radar" :close-on-click-modal="false" width="50%">
      <div class="dialog-radar-main">
        <ul>
          <li v-for="(item,index) in indicator" :key="index" style="margin-left:80px">
            名称：<el-input v-model.lazy="item.name" style="width:200px" placeholder="请输入维度名称"></el-input>
            最大值：<el-input-number v-model.lazy="item.max" controls-position="right" :controls="false" size="medium"></el-input-number>
            <el-button type="text" icon="el-icon-delete" style="margin:0 10px" :disabled="indicator&&indicator.length<=1"
              @click="indicator.pop();"></el-button>
            <el-button type="text" icon="el-icon-plus" style="margin:0 10px" v-if="indicator.length==index+1"
              :disabled="indicator&&indicator.length>=10" @click="indicator.push({})"></el-button>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="" size="mini" @click="visible.radar=false">取 消</el-button>
        <el-button type="primary" size="mini" @click="save">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indicator: [{}, {}, {}],
      visible: {
        radar: false
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
  methods: {
    checkNum() {
      if (!item.max.isInteger(value)) {
        this.$message({
          type: "error",
          message: "请输入数字"
        });
        item.max = "";
      }
    },
    set() {
      this.indicator = JSON.parse(JSON.stringify(this.config.radar.indicator));
      this.visible.radar = true;
    },
    save() {
      this.config.radar.indicator = JSON.parse(JSON.stringify(this.indicator));
      this.visible.radar = false;
    }
  }
};
</script>
<style lang="less">
.config-radar {
  .el-input__inner {
    width: 100% !important;
  }
  .el-dialog {
    min-width: 400px;
  }

  .el-dialog__body {
    padding: 8px 20px;
    .el-input__inner {
      width: 100% !important;
      background: #fff !important;
    }
  }
  .el-dialog__header {
    border-bottom: 1px solid #efefef;
    padding: 10px 20px 5px;
  }

  .el-dialog__title {
    font-size: 16px;
    color: #2d3132;
  }

  .el-dialog__headerbtn {
    top: 14px;
  }
}
</style>
