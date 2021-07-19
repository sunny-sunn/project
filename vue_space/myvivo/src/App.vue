<template>
  <div id="app" class="app">
    <ly-topbar :title="$route.meta.title"></ly-topbar>
    <router-view />
    <ly-tabbar :data="navs"></ly-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { id: 1, name: "首页", icon: "van-icon van-icon-wap-home-o", path: "/home" },
        { id: 2, name: "分类", icon: "van-icon van-icon-apps-o", path: "/classify" },
        { id: 3, name: "我的", icon: "van-icon van-icon-contact", path: "/user" }
      ]
    };
  }
};
</script>
