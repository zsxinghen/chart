/*
*样式配置
*/
<template>
      <component :is="`style-${config.chart}`" :config="config">
    </component>
</template>
<script>
import styleTable from "./styles/config-table";
import styleCard from "./styles/config-card";
import stylePie from "./styles/config-pie";
import styleSunburst from "./styles/config-sunburst";
import styleGauge from "./styles/config-gauge";
import styleFunnel from "./styles/config-funnel";
import styleRadar from "./styles/config-radar";
import styleGraph from "./styles/config-graph";
import styleBar from "./styles/config-bar";
import styleLine from "./styles/config-line";
import styleScatter from "./styles/config-scatter";
import styleWordcloud from "./styles/config-wordcloud";
import styleMap from "./styles/config-map";
export default {
  data() {
    return {
    };
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
    styleGraph,
    styleBar,
    styleLine,
    styleScatter,
    styleWordcloud,
    styleMap
  }
};
</script>

