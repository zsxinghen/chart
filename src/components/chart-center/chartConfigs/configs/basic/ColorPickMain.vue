/* 颜色主题背景色部分*/
<template>
  <div class="color-theme clearfix">
    <ul>
      <li v-for="(item,index) in themeArr" :key="index" :class="selectIndex==index ? 'active' :''" @click="setTheme(item,index)">
        <div class="li-container" :style="{'border':'4px solid '+item.background}">
          <el-popover placement="top" :title="item.title" width="286" trigger="hover">
            <ul class="popover-color-list clearfix" :style="{'background':item.background}">
              <li v-for="(child) in item.color" :key="child" :style="{background:child,float:'left',width:'20px',height:'20px','margin':'3px'}"></li>
            </ul>
            <div class="color-box" slot="reference" :style=" {background: 'linear-gradient('+setBackground(item.color)+')'}" @click="updateChart"></div>
          </el-popover>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["arr", "themeArr"],
  methods: {
    // 重新绘制图表
    updateChart() {
      // this.$store.dispatch("draw", this.configData.config);
    }
  }
};
</script>
<style lang="less">
.color-theme {
  margin-left: 25px;
  width: 100%;
  ul {
    height: 100px;
    width: 220px;
    li {
      cursor: pointer;
      float: left;
      width: 45%;
      margin-right: 11px;
      height: 40px;
      margin-bottom: 8px;
      .li-container {
        box-sizing: border-box;
        height: 100%;
        .popover-color-list {
          height: 40px;
          width: 260px;
          li {
            width: 28px;
            height: 28px;
            float: left;
          }
        }
        .color-box {
          display: block;
          text-align: center;
          height: 100%;
          width: 100%;
        }
      }
    }
    li.active {
      border: 2px solid #66b1ff;
      box-sizing: border-box;
    }
  }
}
</style>

