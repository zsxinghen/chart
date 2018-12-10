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
      nameArr: ["女", "男", "平均"],
      xArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      valArr: [
        [
          { x: 1, value: 1, name: "女" },
          { x: 2, value: 2, name: "女" },
          { x: 3, value: 3, name: "女" },
          { x: 4, value: 4, name: "女" },
          { x: 5, value: 5, name: "女" },
          { x: 6, value: 6, name: "女" },
          { x: 1, value: 1, name: "女" },
          { x: 1, value: 1, name: "女" }
        ],
        [
          { x: 1, value: 1, name: "男" },
          { x: 2, value: 2, name: "男" },
          { x: 3, value: 3, name: "男" },
          { x: 4, value: 4, name: "男" },
          { x: 5, value: 5, name: "男" },
          { x: 6, value: 6, name: "男" },
          { x: 1, value: 1, name: "男" },
          { x: 1, value: 2, name: "男" }
        ]
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
}
</style>

