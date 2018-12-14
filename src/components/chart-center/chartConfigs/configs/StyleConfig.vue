/*
*样式配置
*/
<template>
      <component :is="`style-${config.chart}`" :config="config">
    </component>
</template>
<script>
import styleTable from "../../../../packages/singleChart/table/component.vue";
import styleCard from "../../../../packages/singleChart/card/component.vue";
import stylePie from "../../../../packages/singleChart/pie/component.vue";
import styleSunburst from "../../../../packages/singleChart/sunburst/component.vue";
import styleGauge from "../../../../packages/singleChart/gauge/component.vue";
import styleFunnel from "../../../../packages/singleChart/funnel/component.vue";
import styleRadar from "../../../../packages/singleChart/radar/component.vue";
import styleBar from "../../../../packages/singleChart/bar/component.vue";
import styleLine from "../../../../packages/singleChart/line/component.vue";
import styleScatter from "../../../../packages/singleChart/scatter/component.vue";
import styleWordcloud from "../../../../packages/singleChart/wordcloud/component.vue";

export default {
  data() {
    return {};
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => null
    }
  },
  methods: {},
  components: {
    styleTable,
    styleCard,
    stylePie,
    styleSunburst,
    styleGauge,
    styleFunnel,
    styleRadar,
    styleBar,
    styleLine,
    styleScatter,
    styleWordcloud
  }
};
</script>

