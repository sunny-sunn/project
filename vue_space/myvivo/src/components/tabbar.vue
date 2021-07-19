<template>
  <div class="tabbar">
    <router-link v-for="(item,index) in data" :key="index" :to="item.path">
      <i :class="item.icon"></i>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    value: [String, Number]
  }
};
</script>

<style>
.tabbar {
  bottom: 0;
  height: var(--tabbar-height);
}

.tabbar a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}

.tabbar a i {
  font-size: 0.4rem;
  margin-bottom: 0.05rem;
  color: #555;
}

.tabbar a span {
  font-size: 0.2rem;
  color: #848484;
}

.tabbar a.active i {
  color: #ee1133;
}

.tabbar a.active span {
  color: #000;
}
</style>