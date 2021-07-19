<template>
  <div class="main">
    <swiper class="myslide" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in slides" :key="index">
        <img :src="item.picurl" />
      </swiper-slide>
      <div class="swiper-pagination myslide-page" slot="pagination"></div>
    </swiper>

    <div class="official">
      <ul>
        <li v-for="item in officals" :key="item.id">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>

    <div class="value">
      <ly-title>超值拼团</ly-title>
      <div class="usb">
        <ul>
          <li v-for="item in values" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
              <p class="ausb">{{item.ausb}}</p>
              <p class="wusb">{{item.wusb}}</p>
              <p class="price">
                {{item.pin}}
                <span>{{item.price}}</span>
              </p>
              <del>{{item.dels}}</del>
            </a>
          </li>
        </ul>
      </div>
      <ly-more></ly-more>
    </div>

    <div class="sale">
      <ly-title>热销机型</ly-title>
      <div class="hot">
        <ul>
          <li v-for="item in sales" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
            </a>
            <p class="vi">{{item.vi}}</p>
            <p class="vo">{{item.vo}}</p>
            <p class="much">{{item.much}}</p>
          </li>
        </ul>
        <ul>
          <li v-for="item in sales" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
            </a>
            <p class="vi">{{item.vi}}</p>
            <p class="vo">{{item.vo}}</p>
            <p class="much">{{item.much}}</p>
          </li>
        </ul>
        <ul>
          <li v-for="item in sales" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
            </a>
            <p class="vi">{{item.vi}}</p>
            <p class="vo">{{item.vo}}</p>
            <p class="much">{{item.much}}</p>
          </li>
        </ul>
      </div>
      <ly-more></ly-more>
    </div>

    <div class="boutique">
      <ly-title>精品配件</ly-title>
      <div class="parts">
        <ul>
          <li v-for="item in boutiques" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
            </a>
            <p class="x30">{{item.x30}}</p>
            <p class="pro">{{item.pro}}</p>
            <p class="pri">{{item.pri}}</p>
          </li>
        </ul>
        <ul>
          <li v-for="item in boutiques" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
            </a>
            <p class="x30">{{item.x30}}</p>
            <p class="pro">{{item.pro}}</p>
            <p class="pri">{{item.pri}}</p>
          </li>
        </ul>
        <ul>
          <li v-for="item in boutiques" :key="item.id">
            <a href="#">
              <img :src="item.picurl" class="img-fit" />
            </a>
            <p class="x30">{{item.x30}}</p>
            <p class="pro">{{item.pro}}</p>
            <p class="pri">{{item.pri}}</p>
          </li>
        </ul>
      </div>
      <ly-more></ly-more>
    </div>
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
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".myslide-page"
        }
      },
      slides: [
        {
          id: 1,
          picurl: require("../assets/images/slide1.jpg"),
          path: "/about"
        },
        {
          id: 2,
          picurl: require("../assets/images/slide2.jpg"),
          path: "/contact"
        },
        { id: 3, picurl: require("../assets/images/slide3.jpg"), path: "/user" }
      ],
      officals: [
        { id: 1, icon: "iconfont iconzhengpin", title: "官方正品" },
        { id: 2, icon: "iconfont iconkuaidi", title: "顺丰极速达" },
        { id: 3, icon: "iconfont iconxinaixin", title: "全国联保" },
        { id: 4, icon: "iconfont iconshandian", title: "镭雕定制" }
      ],
      values: [
        {
          id: 1,
          picurl: require("../assets/images/usb.png"),
          ausb: "vivo 2A USB数据线",
          wusb: "支持18W/10W双引擎闪充数据线",
          pin: "拼团价：",
          price: "￥9.9",
          dels: "$19"
        },
        {
          id: 2,
          picurl: require("../assets/images/usb.png"),
          ausb: "vivo 2A USB数据线",
          wusb: "支持18W/10W双引擎闪充数据线",
          pin: "拼团价：",
          price: "￥9.9",
          dels: "$19"
        },
        {
          id: 3,
          picurl: require("../assets/images/usb.png"),
          ausb: "vivo 2A USB数据线",
          wusb: "支持18W/10W双引擎闪充数据线",
          pin: "拼团价：",
          price: "￥9.9",
          dels: "$19"
        }
      ],
      sales: [
        {
          id: 1,
          picurl: require("../assets/images/phone1.png"),
          vi: "iQOO3",
          vo: "骁龙865+双模5G",
          much: "￥3698"
        },
        {
          id: 2,
          picurl: require("../assets/images/phone1.png"),
          vi: "iQOO3",
          vo: "骁龙865+双模5G",
          much: "￥3698"
        }
      ],
      boutiques:[
        {
          id: 1,
          picurl: require("../assets/images/phone2.png"),
          x30: "X30 Pro手机保护壳",
          pro: "奇境系列保护壳 极地畅想",
          pri: "￥29"
        },
        {
          id: 2,
          picurl: require("../assets/images/phone3.png"),
          x30: "iQOO 5A Type-C胶囊数据线",
          pro: "5A大电流 | 线夹收纳 | 官方品质",
          pri: "￥3698"
        }
      ]
    };
  }
};
</script>

<style>
.myslide .swiper-slide img {
  display: block;
  max-width: 100%;
  height: auto;
}

.official {
  max-width: 750px;
  height: 0.58rem;
  color: #666;
  background-color: #fff;
}
.official ul li {
  float: left;
  width: 25%;
  font-size: 0.18rem;
  line-height: 0.58rem;
  text-align: center;
}
.official ul::after {
  display: block;
  content: "";
  clear: both;
}
.official ul li i {
  font-size: 0.28rem;
  vertical-align: bottom;
}

/* 超值拼团 */
.value {
  position: relative;
  background-color: #fff;
  margin-top: 0.2rem;
}
.value .usb {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding-top: 1.08rem;
  padding-bottom: 0.46rem;
  overflow: hidden;
}
.value .usb ul {
  width: 1000px;
}
.value .usb ul li {
  float: left;
  margin-right: 0.1rem;
  text-align: center;
}
.value .usb ul::after {
  display: block;
  content: "";
  clear: both;
}
.value .usb ul li img {
  width: 2.8rem;
  height: auto;
}
.value .usb ul li p {
  width: 2.38rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.value .usb ul li p.ausb {
  font-size: 0.2rem;
}
.value .usb ul li p.wusb {
  font-size: 0.18rem;
  color: #797979;
}
.value .usb ul li p.price {
  font-size: 0.18rem;
}
.value .usb ul li p.price span {
  color: red;
}
.value .usb ul li del {
  font-size: 0.16rem;
  color: #e5e5e5;
}

/* 热销机型 */
.sale {
  position: relative;
  background-color: #fff;
  margin-top: 0.2rem;
}
.sale .hot {
  display: flex;
  flex-direction: column;
  margin: 0 0.85rem;
  padding-top: 1.36rem;
  padding-bottom: 0.46rem;
}
.sale .hot ul{
  display: flex;
  justify-content: space-between;
}
.sale .hot ul li{
  text-align: center;
}
.sale .hot ul li img {
  width: 2.1rem;
  height: auto;
}
.sale .hot ul li p.vi {
  font-size: 0.18rem;
  font-weight: bold;
  padding-top: 0.45rem;
}
.sale .hot ul li p.vo {
  font-size: 0.18rem;
  color: #666;
}
.sale .hot ul li p.much {
  font-size: 0.22rem;
  font-weight: bold;
  color: red;
  padding-bottom: 1rem;
}

/* 精品配件 */
.boutique {
  position: relative;
  background-color: #fff;
  margin-top: 0.2rem;
}
.boutique .parts {
  display: flex;
  flex-direction: column;
  margin: 0 0.85rem;
  padding-top: 1.36rem;
  padding-bottom: 0.46rem;
}
.boutique .parts ul {
  display: flex;
  justify-content: space-between;
}

.boutique .parts ul li {
  text-align: center;
}
.boutique .parts ul li img {
  width: 2.1rem;
  height: auto;
}
.boutique .parts ul li p {
  width: 2.08rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.boutique .parts ul li p.x30 {
  font-size: 0.18rem;
  font-weight: bold;
  padding-top: 0.45rem;
}
.boutique .parts ul li p.pro {
  font-size: 0.18rem;
  color: #666;
}
.boutique .parts ul li p.pri {
  font-size: 0.22rem;
  font-weight: bold;
  color: red;
  padding-bottom: 1rem;
}
</style>