import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import User from "./views/User.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/user", component: User },
    { path: "/login", component: Login }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    if (localStorage.getItem("SC-Token")) {
      next("/user");
    }
  }
  next();
});

export default router;
