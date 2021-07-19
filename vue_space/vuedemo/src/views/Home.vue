<template>
  <div>
    <h2>首页页面</h2>
    {{ slides }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: []
    };
  },
  created() {
    this.$http.get("slides").then(res => {
      console.log(res);
      this.slides = res.result;
    });
  }
};
</script>
