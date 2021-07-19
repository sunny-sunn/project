import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Mock from "mockjs";

import "./api/index";

import http from "./utils/http";

Vue.prototype.$http = http;

// http.get("user").then(res => {
//   console.log(res);
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// var star = Mock.mock({
//   "string|1-10": "★"
// });
// console.log(star);

// var num = Mock.mock({
//   "number|1-100": 10
// });
// console.log(num);

// var price = Mock.mock({
//   "number|100-5000.2": 100
// });
// console.log(price);

// Mock.Random.cname();
// var cname = Mock.mock("@cname");
// console.log(cname);

// var img = Mock.Random.dataImage("200x100");
// console.log(img);

// var navs = Mock.mock({
//   "navs|10": [
//     {
//       "id|+1": 1,
//       "name|+1": ["首页", "全部分类", "我的"],
//       "icon|+1": ["van-icon-wap-home-o", "van-icon-apps-o", "van-icon-contact"],
//       "path|+1": ["/home", "/classify", "/about"]
//     }
//   ]
// });
// console.log(navs);
