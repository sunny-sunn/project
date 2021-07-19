<template>
  <div class="app">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'hello'
    }
  }
}
</script>

<style>
  .app{
    width: 500px;
    height: 500px;
    background-color: wheat;
  }
</style>