/**
*设置字体大小颜色 
*/
<template>
  <div>
    <el-select v-model="config[species].fontFamliy" placeholder="请选择" size="mini">
      <el-option v-for="item in option.fontFamliy" :key="item.value" :label="item.name" :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="config[species].fontSize" placeholder="请选择" size="mini">
      <el-option v-for="item in option.fontSize" :key="item.value" :label="item.name" :value="item.value">
      </el-option>
    </el-select>
    <el-color-picker v-model="config[species].color" size="small" show-alpha></el-color-picker>
  </div>
</template>
<script>
export default {
  name: "wordConfig",
  data() {
    return {
      option: {
        fontSize: [
          {
            name: "12px",
            value: 12
          },
          {
            name: "14px",
            value: 14
          },
          {
            name: "16px",
            value: 16
          },
          {
            name: "18px",
            value: 18
          },
          {
            name: "20px",
            value: 20
          },
          {
            name: "22px",
            value: 22
          },
          {
            name: "24px",
            value: 24
          },
          {
            name: "26px",
            value: 26
          },
          {
            name: "28px",
            value: 28
          },
          {
            name: "30px",
            value: 30
          },
          {
            name: "35px",
            value: 35
          },
          {
            name: "40px",
            value: 40
          },
          {
            name: "45px",
            value: 45
          },
          {
            name: "50px",
            value: 50
          }
        ],
        fontFamliy: [
          {
            name: "微软雅黑",
            value: "Microsoft YaHei"
          },
          {
            name: "冬青黑体",
            value: "Hiragino Sans GB"
          },
          {
            name: "苹方字体",
            value: "pingfang sc"
          }
        ]
      }
    };
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => {
        return {
          title: {}
        };
      }
    },
    species: {
      required: true,
      type: String,
      default: () => {
        return "title";
      }
    }
  },
  updated(){
  }
};
</script>
