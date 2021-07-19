<template>
  <div class="main">
    <h1>关于页面</h1>
    <ul class="subnav">
      <li>
        <router-link to="company">简介</router-link>
      </li>
      <li>
        <router-link to="culture">文化</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style>
.main {
  position: relative;
  padding: 15px;
}
.main h1 {
  margin-bottom: 15px;
  font-size: 24px;
}

.subnav {
  display: flex;
  list-style: none;
  background-color: #f0f0f0;
}
.subnav a {
  display: block;
  padding: 6px 20px;
}
.subnav a.active {
  color: red;
}
</style>
