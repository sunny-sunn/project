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
      cates: []
    };
  },
  computed: {
    info() {
      return this.cates.find(item => item.id == this.id);
    }
  },
  created() {
    this.$http.get("product/cate").then(res => {
      this.cates = res.result;
    });
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
