import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Topbar from "./components/topbar.vue";
import Tabbar from "./components/tabbar.vue";
import Title from "./components/title.vue";
import More from "./components/more.vue";

import "./assets/css/style.css";
import "./assets/css/fonts.css";

Vue.component("LyTopbar",Topbar);
Vue.component("LyTabbar",Tabbar);
Vue.component("LyTitle",Title);
Vue.component("LyMore",More);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
