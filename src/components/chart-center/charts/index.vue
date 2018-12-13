<template>
  <div class="my-chart">
    <component :is="`my-${config.type}`" :config="config" :id="id" v-if="config.data">
    </component>
    <loading v-else-if="!config.data"></loading>
  </div>
</template>
<script>
import myCard from "./type/Card.vue";
import myMap from "./type/Map.vue";
import myTable from "./type/Table.vue";
import myChart from "./type/Chart.vue";
import loading from "./Loading";

export default {
  data() {
    return {};
  },
  props: ["id", "config"],
  components: {
    myCard,
    myMap,
    myTable,
    myChart,
    loading
  },
  mounted() {
    this.config.data = {
      columns: [
        {
          prop: "id",
          label: "ID",
          // width:'120px',
          align: "center"
        },
        {
          prop: "marketName",
          label: "市场名称",
          // width:'120px',
          align: "center"
        },
        {
          prop: "marketClassName",
          label: "市场分类",
          // width:'120px',
          align: "center"
        },
        {
          prop: "productClassName",
          label: "产品大类",
          // width:'120px',
          align: "center"
        }
      ],
      tableData: [
        {
          id: 1,
          marketName: "服装市场",
          marketClassName: "男装",
          productClassName: "西装"
        },
        {
          id: 2,
          marketName: "服装市场",
          marketClassName: "男装",
          productClassName: "皮衣"
        },
        {
          id: 3,
          marketName: "服装市场",
          marketClassName: "女装",
          productClassName: "皮衣"
        },
        {
          id: 4,
          marketName: "服装市场",
          marketClassName: "女装",
          productClassName: "群子"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.my-chart {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

