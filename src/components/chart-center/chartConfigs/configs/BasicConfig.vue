/*
*基础样式
*/
<template>
  <div>
    <div class="config-title">标题样式</div>
    <el-checkbox v-model="config.title.isShow" style="margin-right:10px">显示标题</el-checkbox>
    <el-tooltip class="item" effect="dark" content="位置" placement="top-start" v-if="config.type=='chart'">
      <el-button type="text" style="padding: 0;"><i class="iconfont icon-4-4-4" v-show="config.title.isShow"
          v-popover:titleLocation></i></el-button>
    </el-tooltip>
    <word :config="config" species="title"></word>
    <el-popover ref="titleLocation" placement="right" title="标题位置" width="200" trigger="click" v-model="visible.titleLocation"
      v-if="config.type=='chart'">
      <location :title="config.title" :legend="config.legend" type="title"></location>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="primary" @click="popoverVisiable('titleLocation')">保存</el-button>
      </div>
    </el-popover>
    <!-- 图表 -->
    <div v-if="config.type=='chart'&&config.chart!='wordcloud'&&config.chart!='gauge'">
      <div v-if="config.chart!='sunburst'">
      <div class="config-title">图例样式</div>
      <el-checkbox v-model="config.legend.isShow" style="margin-right:10px">显示图例</el-checkbox>
      <el-tooltip class="item" effect="dark" content="位置" placement="top-start">
        <el-button type="text" style="padding: 0;"><i class="iconfont icon-4-4-4" v-show="config.legend.isShow"
            v-popover:legendLocation></i></el-button>
      </el-tooltip>
      <word :config="config" species="legend"></word>
      <el-popover ref="legendLocation" placement="right" title="图例位置" width="200" trigger="click" v-model="visible.legendLocation">
        <location :title="config.title" :legend="config.legend" type="legend"></location>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="primary" @click="popoverVisiable('legendLocation')">保存</el-button>
        </div>
      </el-popover>
      </div>
      <div class="config-title">标签样式</div>
      <el-checkbox v-model="config.series.isShow" style="margin-right:10px">显示标签</el-checkbox>
      <word :config="config" species="series"></word>
      <div class="config-title">主题样式</div>
      <div class="config-conent">
        主题配置:<el-button type="text" icon="el-icon-setting" style="padding: 0;margin-left:10px" @click="visible.colorPick=true"></el-button>
        <color-theme :config="config" :visible="visible"></color-theme>
      </div>
    </div>
    <div v-if="config.chart=='gauge'">
      <div class="config-title">标签样式</div>
      <el-checkbox v-model="config.series.isShow" style="margin-right:10px">显示标签</el-checkbox>
      <word :config="config" species="series"></word>
      <div class="config-title">背景设置</div>
      <div class="config-conent">
        背景色: <el-color-picker v-model="config.backgroundColor" size="small" show-alpha></el-color-picker>
      </div>
    </div>
    <div v-if="config.chart=='wordcloud'">
      <div class="config-title">背景设置</div>
      <div class="config-conent">
        主题配置:<el-button type="text" icon="el-icon-setting" style="padding: 0;margin-left:10px" @click="visible.colorPick=true"></el-button>
        <color-theme :config="config" :visible="visible"></color-theme>
      </div>
    </div>
    <!-- 地图 -->
    <div v-else-if="config.type=='map'"></div>

    <!-- 卡片 -->
    <div v-else-if="config.type=='card'">
      <div class="config-title">值样式</div>
      <el-checkbox v-model="config.series.isShow" style="margin-right:10px">显示值</el-checkbox>
      <word  :config="config" species="series"></word>
      <div class="config-title">背景设置</div>
      <div class="config-conent">
        背景色: <el-color-picker v-model="config.backgroundColor" size="small" show-alpha></el-color-picker>
      </div>
    </div>
    <!-- 表格 -->
    <div v-else-if="config.type=='table'">
        <div style="margin-left:16px;height:28px;line-height:28px">
        <el-radio v-model="config.title.align" label="left">靠左</el-radio>
        <el-radio v-model="config.title.align" label="center">居中</el-radio>
        <el-radio v-model="config.title.align" label="right">靠右</el-radio>
      </div>
      <div class="config-title">背景设置</div>
      <div style="margin-left:14px">
        <div>
          背景: <el-color-picker v-model="config.backgroundColor" size="small" show-alpha></el-color-picker>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Word from "./basic/Word.vue";
import Location from "./basic/Location.vue";
import ColorTheme from "./basic/ColorTheme.vue";
export default {
  name: "BasicConfig",
  components: {
    Word,
    Location,
    ColorTheme
  },
  props: {
    config: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      visible: {
        titleLocation: false,
        legendLocation: false,
        colorPick: false
      }
    };
  },
  methods: {
    popoverVisiable(visiable) {
      this.visible[visiable] = false;
    }
  }
};
</script>
