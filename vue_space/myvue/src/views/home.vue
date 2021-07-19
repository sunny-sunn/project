<template>
  <div class="main">
    <h1>首页页面</h1>
    <swiper class="myslide" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <img :src="item.picurl" />
      </swiper-slide>
      <div class="swiper-pagination myslide-page" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  // data() {
  //   return {
  //     swiperOptions: {
  //       loop: true,
  //       autoplay: {
  //         delay: 5000
  //       },
  //       pagination: {
  //         el: ".myslide-page"
  //       }
  //     },
  //     slides: [
  //       {
  //         id: 1,
  //         picurl: require("../assets/images/slide1.jpg"),
  //         path: "/about"
  //       },
  //       {
  //         id: 2,
  //         picurl: require("../assets/images/slide2.jpg"),
  //         path: "/contact"
  //       },
  //       {
  //         id: 3,
  //         picurl: require("../assets/images/slide3.jpg"),
  //         path: "/user"
  //       }
  //     ]
  //   };
  // }

  data() {
    return {
      slides: [],
      // makegroup: [],
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".myslide-page"
        }
      }
    };
  },
  created() {
    // let xhr1 = new XMLHttpRequest();
    // xhr1.onreadystatechange = () => {
    //   if (xhr1.readyState === 4 && xhr1.status === 200) {
    //     let res1 = JSON.parse(xhr1.responseText);
    //     this.slides = res1.result;
    //   }
    // };
    // xhr1.open("GET", "api/slides");
    // xhr1.send();

    this.$http.get("slides").then(res => {
      console.log(res);
      this.slides = res.result;
    });
  }
  // mounted() {
  //   setTimeout(() => {
  //     new Swiper(this.$refs.swiper, {
  //       loop: this.loop,
  //       autoplay: this.autoplay,
  //       pagination: this.pager && {
  //         el: this.$refs.pager
  //       }
  //     });
  //   }, 60);
  // }
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
.myslide .swiper-slide img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
