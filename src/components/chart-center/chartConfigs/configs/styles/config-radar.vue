<template>
 <div class="config-radar">
      <div class="config-li">
    <div class="config-title">填充设置</div>
  </div>
  <div class="config-li">
    <div class="config-title">维度设置</div>
    分几级，最大值
  </div>
   <div class="config-li">
    <div class="config-title">线设置</div>
    线宽、线类型、线颜色、分割线、轴线
  </div>
    <div class="config-li">
    <div class="config-title">雷达图大小</div>
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
