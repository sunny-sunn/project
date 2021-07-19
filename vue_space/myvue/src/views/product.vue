<template>
  <div class="product">
    <h3>{{ info.name }}</h3>
    <p>商品列表正在建设中...</p>
    <div style="height:3000px"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
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
  },
  computed: {
    info() {
      return this.cates.find(item => item.id == this.id);
    }
  }
};
</script>

<style>
.product {
  padding-left: 85px;
}
.product h3 {
  margin-bottom: 15px;
}
</style>
