<template>
  <div :id="`card-${id}`" class="my-bi-card" :style="`background:${config.settings.backgroundColor}`">
    <div :class="[{
         label:config.settings.isLink==false,
         link:config.settings.isLink==true,
    }]"
      @click="go">
      <p v-show="config.settings.title.isShow" :style="`font-size:${config.settings.title.fontSize}px;font-family:${config.settings.title.fontFamliy};
      color:${config.settings.title.color}`">{{config.settings.title.text}}</p>
      <p v-show="config.settings.series.isShow" :style="`font-size:${config.settings.series.fontSize}px;font-family:${config.settings.series.fontFamliy};
      color:${config.settings.series.color}`">{{config.settings.series.data}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
      default() {
        return {};
      }
    },
    config: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    this.setData();
  },
  methods: {
    go() {
      if (
        this.config.settings.isLink &&
        this.config.settings.linkType == "current"
      ) {
        window.location.href = this.config.settings.linkUrl;
      } else if (
        this.config.settings.isLink &&
        this.config.settings.linkType == "new"
      ) {
        window.open(this.config.settings.linkUrl);
      }
    },
    setData() {
      if (this.config.data instanceof Array) {
        this.config.settings.title.text = this.config.data[0].name;
        this.config.settings.series.data = this.config.data[0].value;
      } else {
        this.config.settings.title.text = this.config.data.name;
        this.config.settings.series.data = this.config.data.value;
      }
    }
  },
  watch: {
    "config.data": {
      deep: true,
      handler() {
        this.setData();
      }
    }
  }
};
</script>
<style lang="less">
.my-bi-card {
  display: flex;

  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  .link {
    cursor: pointer;
  }

  > div {
    position: absolute;
    max-width: 60%;

    > p {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
