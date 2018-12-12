<template>
  <div class="config-pie">
    <div class="config-li">
    </div>
    <!-- name 
    radius
    highlightPolicy 
    层级颜色levels -->
  </div>
</template>
<script>
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
    mounted() {

    },
    methods: {}
  };

</script>
<style lang="less">
  .config-pie {
    .el-input__inner {
      width: 100% !important;
    }
  }

</style>
