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
      rowName: [
        {
          label: "six",
          value: "six"
        },
        {
          label: "月份",
          value: "月份"
        },
        {
          label: "值",
          value: "值"
        }
      ],
      rowValue: [
        {
          six: "男",
          月份: "1",
          值: "3.2"
        },
        {
          six: "男",
          月份: "2",
          值: "3.2"
        },
        {
          six: "女",
          月份: "2",
          值: "3.2"
        },
        {
          six: "女",
          月份: "3",
          值: "3.2"
        },
        {
          six: "女",
          月份: "4",
          值: "3.2"
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

