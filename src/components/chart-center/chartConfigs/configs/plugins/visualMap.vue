/*
* 映射配置
*/
<template>
  <el-dialog title="映射配置" :visible.sync="visible.visualMap" :close-on-click-modal="false" width="50%" v-if="visible.visualMap">
    <div class="dialog-main">
       <div style="margin-bottom:10px;height:40px;line-height:40px">
        <span style="margin:0 15px">状态：</span>
        <el-radio v-model="visualMap.status" label="on">使用</el-radio>
        <el-radio v-model="visualMap.status" label="off">关闭</el-radio>
      </div>
      <div style="margin-bottom:10px;height:40px;line-height:40px" v-show="visualMap.status=='on'">
        <span style="margin:0 15px">类型：</span>
        <el-radio v-model="visualMap.type" label="continuous">连续型</el-radio>
        <el-radio v-model="visualMap.type" label="piecewise">分段型</el-radio>
      </div>
      <div style="margin-bottom:10px;height:40px;line-height:40px" v-show="visualMap.status=='on'">
        <span style="margin:0 0 0 15px">显示：</span>
       <el-checkbox v-model="visualMap.isShow"></el-checkbox>
      </div>
      <!--  连续型 -->
      <div v-show="visualMap.type=='continuous'&&visualMap.status=='on'" class="continuous">
        <div style="margin-bottom:10px">
          <span style="margin:0 0 0 15px">颜色：</span>
          <el-color-picker v-for="(item,index) in visualMap.color" :key="index" style="margin:0 5px" v-model="visualMap.color[index]"
            show-alpha size="mini"></el-color-picker>
          <el-button type="text" icon="el-icon-plus" style="margin:0 10px" :disabled="visualMap.color&&visualMap.color.length>=10"
            @click="visualMap.color.push('')"></el-button>
          <el-button type="text" icon="el-icon-delete" style="margin:0 10px" :disabled="visualMap.color&&visualMap.color.length<=1"
            @click="visualMap.color.pop();"></el-button>
        </div>
        <el-form v-model="visualMap">
          <el-row>
            <el-col :span="10">
              <el-form-item label="最小值：">
                <el-input-number v-model="visualMap.min" size="mini" controls-position="right" :controls="false" :min="-999999"
                  :max="visualMap.max"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="最大值：">
                <el-input-number v-model="visualMap.max" size="mini" controls-position="right" :controls="false" :min="visualMap.min"
                  :max="99999"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 分段型 -->
      <div v-show="visualMap.type=='piecewise'&&visualMap.status=='on'" class="piecewise">
        <div style="padding: 0 15px" class="piecewise-label">区间：</div>
        <div>
          <div v-for="(item,index) in visualMap.pieces" :key="index">
            <el-input-number v-model="item.min" size="mini" controls-position="right" :controls="false" :min="-99999"
              :max="item.max"></el-input-number>
            ~
            <el-input-number v-model="item.max" size="mini" controls-position="right" :controls="false" :min="item.min"
              :max="99999"></el-input-number>
            <el-color-picker style="margin:0 5px" v-model="item.color" show-alpha size="mini"></el-color-picker>
            <el-button type="text" icon="el-icon-delete" style="margin:0 10px" :disabled="visualMap.pieces&&visualMap.pieces.length<=1"
              @click="visualMap.pieces.pop();"></el-button>
            <el-button type="text" icon="el-icon-plus" style="margin:0 10px" v-if="visualMap.pieces.length==index+1"
              :disabled="visualMap.pieces&&visualMap.pieces.length>=10" @click="visualMap.pieces.push({})"></el-button>

          </div>
        </div>

      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="" size="mini" @click="visible.visualMap=false">取 消</el-button>
      <el-button type="primary" size="mini" @click="save">保存</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      visualMap: {
        color: [""],
        pieces: [{}]
      }
    };
  },
  props: ["config", "visible"],
  mounted() {
    this.visualMap = JSON.parse(JSON.stringify(this.config.visualMap));
  },
  methods: {
    save() {
      if (this.visualMap.type == "continuous") {
        let flag = this.visualMap.color.findIndex(v => v == "");
        if (flag == -1) {
          this.config.visualMap = JSON.parse(JSON.stringify(this.visualMap));
          this.visible.visualMap = false;
        } else {
          this.$message({
            type: "warning",
            message: "请把颜色选取完整"
          });
        }
      }
      else{
        this.config.visualMap = JSON.parse(JSON.stringify(this.visualMap));
        this.visible.visualMap = false;
      }
    }
  }
};
</script>
<style lang="less">
.el-dialog {
  min-width: 400px;
}

.el-dialog__body {
  padding: 8px 20px;

  .continuous {
    .el-input__inner {
      background: #fff !important;
      border: 1px solid #dcdfe6 !important;
      height: 28px !important;
    }
  }

  .piecewise {
    display: flex;

    > div {
      flex: 1;
    }

    .piecewise-label {
      flex: 0 0 50px !important;
    }

    .el-input__inner {
      background: #fff !important;
      height: 28px !important;
      width: 130px !important;
    }
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

.el-radio__input.is-checked + .el-radio__label {
  color: #606266;
}
</style>
