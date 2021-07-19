<template>
  <div class="topbar">
    <h1>
      <slot>{{title}}</slot>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
.topbar {
  top: 0;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  height: var(--topbar-height);
  align-items: center;
}

.topbar h1 {
  font-size: 0.3rem;
  font-weight: normal;
}
</style>