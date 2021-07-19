<template>
  <div class="main">
    <h1>分类页面</h1>
    <ul class="leftnav">
      <li v-for="item in cates" :key="item.id">
        <router-link :to="item.id.toString()">{{ item.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cates: [
        { id: 1, name: "iQOO" },
        { id: 2, name: "NEX" },
        { id: 3, name: "X系列" },
        { id: 4, name: "S系列" },
        { id: 5, name: "Y系列" },
        { id: 6, name: "Z系列" },
        { id: 7, name: "U系列" }
      ]
    };
  }
};
</script>

<style>
.main {
  position: relative;
  padding: 15px;
}
.main h1 {
  margin-bottom: 15px;
  font-size: 24px;
}

.leftnav {
  position: fixed;
  width: 70px;
  list-style: none;
  background-color: #f0f0f0;
}
.leftnav a {
  display: block;
  padding: 10px;
}
.leftnav a.active {
  color: red;
}
</style>
