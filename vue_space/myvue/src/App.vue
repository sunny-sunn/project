<template>
  <div id="app">
    <router-view></router-view>

    <ul class="tabbar">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/classify">分类</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}

html {
  background-color: #ccc;
}
#app {
  max-width: 375px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.tabbar {
  position: fixed;
  display: flex;
  list-style: none;
  max-width: 375px;
  width: 100%;
  bottom: 0;
  height: 60px;
  background-color: #f2f2f2;
}
.tabbar li {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.tabbar li a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.tabbar li a.active {
  color: red;
}
</style>
