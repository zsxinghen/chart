/* 颜色主题背景色部分*/
<template>
  <div class="theme-pick">
    <div class="color-box-show" slot="reference" :style=" {'border':'4px solid '+config.backgroundColor,background: 'linear-gradient('+setBackground(config.color)+')'}"></div>
    <el-dialog title="主题设置" :visible.sync="visible.colorPick" :close-on-click-modal="false" width="50%" v-if=" this.visible.colorPick">
      <div class="dialog-color-pick">
        <div class="curr-theme">
          <div class="curr-theme-header clearfix">
            <div class="curr-theme-header-label">当前主题 :</div>
            <div class="color-box" slot="reference" :style=" {'border':'4px solid '+defaultTheme.background,background: 'linear-gradient('+setBackground(defaultTheme.color)+')'}"></div>
          </div>
        </div>
        <div class="curr-detail">
          <div class="curr-detail-item clearfix">
            <div class="curr-detail-item-label">背景色 :</div>
            <div>
              <el-color-picker v-model="defaultTheme.background" style="top:4px" size="small" show-alpha></el-color-picker>
            </div>
          </div>
          <div class="curr-detail-item clearfix">
            <div class="curr-detail-item-label">颜色组 :</div>
            <div>
              <ul class="color-list clearfix">
                <el-color-picker v-for="(item,index) in defaultTheme.color" :key="index" show-alpha style="margin:0 5px"
                  v-model="defaultTheme.color[index]" show-alpha size="mini"></el-color-picker>
                <el-button type="text" icon="el-icon-plus" style="margin:0 10px" :disabled="defaultTheme.color&&defaultTheme.color.length>=12"
                  @click="defaultTheme.color.push('')"></el-button>
                <el-button type="text" icon="el-icon-delete" style="margin:0 10px" :disabled="defaultTheme.color&&defaultTheme.color.length<=1"
                  @click="defaultTheme.color.pop();"></el-button>
                <!-- <li v-for="(item,i) in defaultTheme.color" :key="i">
                  <el-color-picker v-model="defaultTheme.color[i]" style="top:4px" size="small" show-alpha></el-color-picker>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="other-theme clearfix">
          <div class="curr-other-item-label">其他主题 :</div>
          <div class="color-theme clearfix">
            <ul>
              <li v-for="(item,index) in themeArr" :key="index" :class="selectIndex==index ? 'active' :''" @click="setTheme(item,index)">
                <div class="li-container" :style="{'border':'4px solid '+item.background}">
                  <el-popover placement="bottom" :title="item.title" width="286" trigger="hover">
                    <ul class="popover-color-list clearfix" :style="{'background':item.background}">
                      <li v-for="(child) in item.color" :key="child" :style="{background:child,float:'left',width:'20px',height:'20px','margin':'3px'}"></li>
                    </ul>
                    <div class="color-box" slot="reference" :style=" {background: 'linear-gradient('+setBackground(item.color)+')'}"></div>
                  </el-popover>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetTheme()" size="mini">取 消</el-button>
        <el-button type="primary" size="mini" @click="updateChart()">保存</el-button>
      </span>
    </el-dialog>
  </div>

</template>
<script>
import ColorPickMain from "./ColorPickMain";
export default {
  data() {
    return {
      selectIndex: -1,
      defaultTheme: {
        color: null,
        background: null
      },
      themeArr: [
        {
          title: "主题1",
          background: "#ffffff",
          color: [
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#91c7ae",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3"
          ]
        },
        {
          title: "主题2",
          background: "#000000",
          color: [
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#91c7ae",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3"
          ]
        },
        {
          title: "主题3",
          background: "#ffffff",
          color: [
            "#61a0a8",
            "#c23531",
            "#2f4554",
            "#d48265",
            "#91c7ae",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3"
          ]
        }
      ]
    };
  },
  props: ["config", "visible"],
  components: {
    ColorPickMain
  },
  mounted() {},
  methods: {
    setTheme(item, i) {
      this.selectIndex = i;
      this.$set(this.defaultTheme, "background", item.background);
      this.$set(
        this.defaultTheme,
        "color",
        JSON.parse(JSON.stringify(item.color))
      );
    },
    resetTheme() {
      this.visible.colorPick = false;
    },
    // 重新绘制图表
    updateChart() {
      this.$set(this.config, "backgroundColor", this.defaultTheme.background);
      this.$set(
        this.config,
        "color",
        JSON.parse(JSON.stringify(this.defaultTheme.color))
      );
      this.visible.colorPick = false;
    },
    //   设置渐进色
    setBackground(colorArr) {
      let str = "135deg, ",
        count = 40;
      for (let i in colorArr) {
        if (i == 0) {
          str += colorArr[i] + " 0%, ";
        } else if (i == colorArr.length - 1) {
          str += colorArr[i] + " 100%";
        } else if (i % 2 == 0) {
          str += colorArr[i] + " " + count + "%, ";
          count += 5;
        }
      }
      return str;
    }
  },
  watch: {
    "visible.colorPick": function() {
      if (this.visible.colorPick) {
        this.selectIndex = -1;
        this.$set(this.defaultTheme, "background", null);
        this.$set(this.defaultTheme, "color", null);
        this.$set(this.defaultTheme, "background", this.config.backgroundColor);
        this.$set(
          this.defaultTheme,
          "color",
          JSON.parse(JSON.stringify(this.config.color))
        );
      }
    }
  }
};
</script>
<style lang="less">
.theme-pick {
  .color-box-show {
    height: 28px;
    width: 200px;
  }

  .el-dialog {
    min-width: 400px;
  }

  .el-dialog__body {
    padding: 8px 20px;
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

  .dialog-color-pick {
    .curr-theme {
      height: 40px;
      margin-bottom: 10px;

      .curr-theme-header {
        height: 100%;
        padding: 8px 0;
        box-sizing: border-box;

        .curr-theme-header-label {
          float: left;
          height: 100%;
          width: 80px;
          line-height: 32px;
          text-align: left;
        }

        .color-box {
          float: left;
          height: 100%;
          width: 100px;
        }
      }
    }

    .curr-detail {
      height: auto;
      padding: 8px 0;
      box-sizing: border-box;
      min-height: 100px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;

      .curr-detail-item {
        .curr-detail-item-label {
          float: left;
          height: 100%;
          width: 80px;
          line-height: 40px;
          text-align: left;
        }

        ul {
          margin-left: 80px;

          li {
            float: left;
            margin-right: 10px;
          }
        }
      }
    }

    .other-theme {
      .curr-other-item-label {
        float: left;
        height: 100%;
        width: 80px;
        line-height: 40px;
        text-align: left;
      }

      .color-theme {
        float: left;
        margin-left: 80px;
        margin-top: -50px;
        height: 40px;
        width: calc(100% - 80px);

        ul {
          height: 100%;
          width: 100%;
          padding: 8px 0;
          box-sizing: border-box;

          li {
            cursor: pointer;
            float: left;
            margin-right: 11px;
            height: 100%;
            min-height: 32px;
            margin-bottom: 8px;

            .li-container {
              box-sizing: border-box;
              height: 100%;

              .popover-color-list {
                height: 40px;
                width: 100px;

                li {
                  width: 28px;
                  height: 28px;
                  float: left;
                }
              }

              .color-box {
                float: left;
                height: 100%;
                width: 100px;
              }
            }
          }

          li.active {
            border: 2px solid #66b1ff;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
