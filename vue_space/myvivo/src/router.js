import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Classify from "./views/Classify.vue";
import User from "./views/User.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/home" },
    { path: '/home', component: Home, meta:{title: "vivo官方商城"}},
    { path: '/classify', component: Classify, meta:{title: "全部分类"}},
    { path: '/user', component: User, meta:{title: "个人中心"}}
  ]
});

export default router;