Vue.component('LyHeader',{
  props:{
    logo:String
  },
  template:`
  <div class="header">
    <h1><slot>{{logo}}</slot></h1>
  </div>
  `
})

Vue.component('LyTabbar',{
  props:{
    data:Array,
    value:[String,Number]
  },
  template:`
  <div class="tabbar">
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

Vue.component('LySwiper',{
  props: {
    data: Array,
    delay: {
      type: Number,
      default: 3000
    },
    nav: Boolean,
    pager: Boolean,
    autoplay: Boolean,
    loop: Boolean,
    pageCls: {
      type: String,
      default: 'swiper-pagination'
    },
  },
  template: `
  <div ref="swiper" class="swiper-container">
    <div class="swiper-wrapper">
      <div 
      class="swiper-slide"
      v-for="item in data"
      >
        <router-link :to="item.path"><img :src="item.picurl"></router-link>
      </div>
    </div>
    <template v-if="nav">
      <div ref="prev" class="swiper-button-prev"></div>
      <div ref="next" class="swiper-button-next"></div>
    </template>
    <div v-if="pager" ref="page" :class="pageCls"></div>
  </div>
  `,
  mounted(){

    new Swiper(this.$refs.swiper,{
      loop: this.loop,
      autoplay: this.autoplay && {
        delay: this.delay,
        disableOnInteraction: false
      },
      navigation: this.nav && {
        nextEl: this.$refs.next,
        prevEl: this.$refs.prev,
      },
      pagination: this.pager && {
        el: this.$refs.page,
      }
    })
  }
})