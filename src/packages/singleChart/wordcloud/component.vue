<template>
 <div class="config-wordcloud">
  <div class="config-li">
    <div class="config-title"></div>
  </div>
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
  }
};
</script>
