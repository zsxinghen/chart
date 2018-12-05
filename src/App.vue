<template>
  <div id="app">
    <chart-center></chart-center>
  </div>
</template>

<script>
import chartCenter from "./page/chart-center/index.vue";

export default {
  name: "App",
  components: {
    chartCenter
  }
};
</script>

<style>
@import url("./assets/style/reset.less");
#app {
  height: 100vh;
  padding: 10px 0;
  box-sizing: border-box;
  min-width: 1200px;
}
</style>
