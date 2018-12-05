import Vue from 'vue'
import Router from 'vue-router'
const layoutCenter = () =>
  import('../page/layoutCenter.vue'); //布局中心
const dataCenter = () =>
  import('../page/dataCenter.vue') //数据中心
const watchCenter = () =>
  import('../page/watchCenter.vue'); //看板中心
const echartsCenter = () =>
  import('../page/echartsCenter.vue'); //报表设计中心
Vue.use(Router)
export const TYPE_ROUTER = [];
export default new Router({
  routes: [{
      path: '/layoutCenter',
      component: layoutCenter,
      name: 'layoutCenter'
    },
    {
      path: '/dataCenter',
      component: dataCenter,
      name: 'dataCenter'
    },
    {
      path: '/watchCenter',
      component: watchCenter,
      name: 'watchCenter'
    },
    {
      path: '/echartsCenter',
      component: echartsCenter,
      name: 'echartsCenter'
    }
  ].concat(TYPE_ROUTER)
})
