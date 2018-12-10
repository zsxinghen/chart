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
          [1, 1, "女"],
          [2, 2, "女"],
          [3, 3, "女"],
          [4, 4, "女"],
          [6, 5, "女"],
          [5, 6, "女"]
        ],
        [[2, 1, "男"], [3, 8, "男"], [4, 6, "男"]]
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

