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
      nameArr: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      valArr: [
        {
          value: 335,
          name: "直接访问"
        },
        {
          value: 310,
          name: "邮件营销"
        },
        {
          value: 234,
          name: "联盟广告"
        },
        {
          value: 135,
          name: "视频广告"
        },
        {
          value: 1548,
          name: "搜索引擎"
        }
      ]
    };
  },
};
</script>
<style lang="less">
.my-chart {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>

