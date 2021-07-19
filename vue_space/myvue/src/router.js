import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/home.vue";
import Classify from "./views/classify.vue";
import About from "./views/about.vue";

import Product from "./views/product.vue";
import Company from "./views/company.vue";
import Culture from "./views/culture.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/classify",
      component: Classify,
      children: [
        { path: "", redirect: "product/1" },
        { path: "product/:id", component: Product, props: true }
      ]
    },
    {
      path: "/about",
      component: About,
      children: [
        { path: "", redirect: { name: "company" } },
        { name: "company", path: "company", component: Company },
        { path: "culture", component: Culture }
      ]
    }
  ],
  scrollBehavior(to) {
    let reg = /^(\/classify\/product\/\d+)/;
    if (reg.test(to.path)) return { y: 0 };
  }
});
export default router;
