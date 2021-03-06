import Vue from "vue";
import router from "./router";

import App from "./App.vue";

import store from "./store/index";

// import "./api/index";

import http from "./utils/http";

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
