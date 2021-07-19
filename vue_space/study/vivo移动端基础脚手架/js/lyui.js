Vue.component('footnav',{
  props:{
    data:Array,
    value:[String,Number]
  },
  template:`
  <div class="footnav">
    <router-link
    v-for="item in data"
    :to="item.path"
    :key="item.id">
      <i :class="['van-icon',item.icon]"></i>
      <span>{{item.name}}</span>
    </router-link>
  </div>
  `
})