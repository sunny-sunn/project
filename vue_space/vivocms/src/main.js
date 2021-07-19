import './assets/style/reset.less'

import Vue from 'vue'
// import App from './App.vue'
import router from './router/index'
import store from './store/index'

// ElementUI 全局安装
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/theme/index.css'

import http from './utils/http'

import './api/index'
Vue.use(ElementUI)

Vue.prototype.$http = http

new Vue({
  render: h => h('router-view'),
  router,
  store
}).$mount('#app')
