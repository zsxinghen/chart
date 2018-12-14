<template>
  <div class="config-table">
    <div class="config-li">

      <div class="config-title">表头设置</div>
      <div style="margin-left:14px">
        <word  v-if="config.th" :config="config" species="th"></word>
        <div>
          背景: <el-color-picker v-model="config.thColor" size="small" show-alpha></el-color-picker>
        </div>
      </div>
    </div>
    <div class="config-li">
      <div class="config-title">内容设置</div>
      <div style="margin-left:14px">
        <word v-if="config.td" :config="config" species="td"></word>
        <div>
          背景: <el-color-picker v-model="config.tdColor" size="small" show-alpha></el-color-picker>
        </div>
      </div>
      <!-- <div style="margin-left:14px">
        边框: <el-color-picker v-model="config.borderColor" size="small" show-alpha></el-color-picker>
      </div> -->
      <el-checkbox v-model="config.combineRow">合并列</el-checkbox>
    </div>
    <!-- <div class="config-li">
      <div class="config-title">高亮设置</div>
      <div style="margin-left:14px">
        颜色: <el-color-picker v-model="config.hoverColor" size="small" show-alpha></el-color-picker>
      </div>
    </div> -->
  </div>
  </div>
</template>
<script>
    import Word from "../../../components/chart-center/chartConfigs/configs/basic/Word.vue";
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
    components: {
      Word
    }
  };

</script>
