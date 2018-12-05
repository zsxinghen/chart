/* 标题、图例定位部分 */
<template>
  <div class="popover-location">
    <ul>
      <li v-for="(item,index) in arr" :key="index" @click="resetPosition(index)">{{setName(index)}}</li>
    </ul>
    <el-form :model="legend" label-width="80px" label-position="left" v-if="type=='legend'">
      <el-form-item label="图例方向:">
        <el-select v-model="legend.orient" placeholder="请选择" size="mini">
          <el-option label="水平" value="horizontal"></el-option>
          <el-option label="垂直" value="vertical"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        ["left", "top"],
        ["center", "top"],
        ["right", "top"],
        ["left", "center"],
        ["center", "center"],
        ["right", "center"],
        ["left", "bottom"],
        ["center", "bottom"],
        ["right", "bottom"]
      ]
    };
  },
  props: ["title", "legend", "type"],
  methods: {
    // 重新绘制图表
    setName(i) {
      if (this.title.index && this.title.index == i) {
        return "标题";
      }
      if (this.legend.index && this.legend.index == i) {
        return "图例";
      }
    },
    resetPosition(i) {
      if (this.type == "title" && i != this.legend.index) {
        this.$set(this.title, "index", i + "");
        this.$set(this.title, "locationX", this.arr[i][0]);
        this.$set(this.title, "locationY", this.arr[i][1]);
      }
      if (this.type == "legend" && i != this.title.index) {
        this.$set(this.legend, "index", i + "");
        this.$set(this.legend, "locationX", this.arr[i][0]);
        this.$set(this.legend, "locationY", this.arr[i][1]);
      }
    }
  }
};
</script>
<style lang="less">
.popover-location {
  ul {
    height: 120px;
    width: 60;
    li {
      cursor: pointer;
      float: left;
      width: 30%;
      height: 30px;
      line-height: 30px;
      margin: 2px;
      text-align: center;
      border: 1px solid #66b1ff;
    }
  }
  .el-input__inner {
    width: 100px;
    border: none;
    height: 24px;
    // background: rgba(232, 235, 237, 1);
    border-bottom: 1px solid #66b1ff;
    border-radius: 0;
    margin-bottom: 10px;
  }
}
</style>

