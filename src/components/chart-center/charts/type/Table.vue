<template>
	<div  :id='id' class="my-bi-chart">
    <div v-show="config.settings.title.isShow&&config.settings.title.text" :style="`height:100%;background:${config.settings.backgroundColor};padding:10px;box-sizing:boder-box;text-align:${config.settings.title.align};font-size:${config.settings.title.fontSize}px;font-family:${config.settings.title.fontFamliy};
      color:${config.settings.title.color}`">{{config.settings.title.text}}</div>
		<my-table :columns="config.data.columns" :config="config.settings" :rowspanConfig="rowspanConfig" :colspanConfig="config.data.colspanConfig" :tableData="config.data.tableData" >
		</my-table>
	</div>
</template>
<script>
import myTable from "./table-ext.vue";
import { setTimeout } from "timers";
export default {
  components: {
    myTable
  },
  data() {
    return {
      rowspanConfig: [],
      colspanConfig: []
    };
  },
  props: {
    id: {
      type: String,
      default() {
        return {};
      }
    },
    config: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    if (this.config.settings.combineRow && this.config.data) {
      let arr = this.config.data.columns.map(v => v.prop);
      this.$set(this, "rowspanConfig", arr);
    } else {
      this.$set(this, "rowspanConfig", []);
    }
    this.colspanConfig = [];
    this.config.data.columns.forEach(val => {
      val.align = "center";
    });
  },
  methods: {
    // 更改样式
    setStyle() {
      let dom = document.getElementById(`${this.id}`);
      let parDom = dom.parentElement;
      parDom.style.background = this.config.settings.backgroundColor;
    }
  },
  watch: {
    "config.settings": {
      //根据数据变动，重新渲染页面图表
      deep: true,
      handler() {
        if (this.config.settings.combineRow && this.config.data) {
          let arr = this.config.data.columns.map(v => v.prop);
          this.$set(this, "rowspanConfig", arr);
        } else {
          this.$set(this, "rowspanConfig", []);
        }
        this.setStyle();
      }
    }
  }
};
</script>