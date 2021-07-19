<template>
  <div class="main">
    <div class="classify">
      <ul class="leftnav">
        <li
          v-for="(item,index) in cates"
          :key="item.id"
          :class="{active: index === active}"
          @click="switchNav(item.id)"
        >{{item.name}}</li>
      </ul>

      <div class="content" @scroll="scrollView">
        <div v-for="item in cates" :key="item.id">
          <div :ref="'view_'+item.id" class="product-title">
            <img :src="item.picurl" class="img-fit" />
            <h4>{{item.name}}</h4>
          </div>

          <div class="product-list">
            <router-link v-for="child in subProducts(item.id)" to :key="child.id">
              <img :src="child.picurl" class="img-fit" />
              <div class="intro">
                <h4>{{child.title}}</h4>
                <p class="desc">{{child.desc}}</p>
                <p class="price">{{child.price.toPrice}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cates: [
        { id: 1, name: "iQOO", picurl: require("../assets/images/img2.jpg") },
        { id: 2, name: "NEX", picurl: require("../assets/images/img2.jpg") },
        { id: 3, name: "X系列", picurl: require("../assets/images/img2.jpg") },
        { id: 4, name: "S系列", picurl: require("../assets/images/img2.jpg") },
        { id: 5, name: "Y系列", picurl: require("../assets/images/img2.jpg") },
        { id: 6, name: "Z系列", picurl: require("../assets/images/img2.jpg") },
        { id: 7, name: "U系列", picurl: require("../assets/images/img2.jpg") },
        { id: 8, name: "手机充电", picurl: require("../assets/images/img2.jpg") },
        { id: 9, name: "手机配件", picurl: require("../assets/images/img2.jpg") },
        { id: 10, name: "音乐设备", picurl: require("../assets/images/img2.jpg") },
        { id: 11, name: "智能硬件", picurl: require("../assets/images/img2.jpg") },
        { id: 12, name: "游戏摄影", picurl: require("../assets/images/img2.jpg") },
        { id: 13, name: "日用出行", picurl: require("../assets/images/img2.jpg") }
      ],
      products: [
        {
          id: 1,
          pid: 1,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 1999
        },
        {
          id: 2,
          pid: 1,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 2999
        },

        {
          id: 3,
          pid: 2,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 5999
        },
        {
          id: 4,
          pid: 2,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 1999
        },

        {
          id: 5,
          pid: 3,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 2999
        },
        {
          id: 6,
          pid: 3,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 6999
        },

        {
          id: 7,
          pid: 4,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 1999
        },
        {
          id: 8,
          pid: 4,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 3999
        },

        {
          id: 9,
          pid: 5,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 10,
          pid: 5,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },

        {
          id: 11,
          pid: 6,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 12,
          pid: 6,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },

        {
          id: 13,
          pid: 7,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 14,
          pid: 7,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 1999
        },

        {
          id: 15,
          pid: 8,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 3999
        },
        {
          id: 16,
          pid: 8,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 2999
        },

        {
          id: 17,
          pid: 9,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 18,
          pid: 9,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },

        {
          id: 19,
          pid: 10,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 20,
          pid: 10,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 1999
        },

        {
          id: 21,
          pid: 11,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 22,
          pid: 11,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 3999
        },
        {
          id: 25,
          pid: 11,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 26,
          pid: 11,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 7999
        },

        {
          id: 27,
          pid: 12,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 28,
          pid: 12,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 5999
        },
        {
          id: 29,
          pid: 12,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 30,
          pid: 12,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 7999
        },

        {
          id: 31,
          pid: 13,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 32,
          pid: 13,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 7999
        },
        {
          id: 33,
          pid: 13,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 34,
          pid: 13,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 7999
        },
        {
          id: 35,
          pid: 13,
          title: "iQOO 5 Pro 5G版1",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 4999
        },
        {
          id: 36,
          pid: 13,
          title: "iQOO 5 Pro 5G版2",
          picurl: require("../assets/images/img3.jpg"),
          desc: "BMW定制，高通骁龙865，120W超快闪充",
          price: 7999
        }
      ],
      posArr: [],
      active: 0
    };
  },
  methods: {
    subProducts(id) {
      return this.products.filter(item => item.pid === id);
    },
    switchNav(id) {
      this.$refs["view_" + id][0].scrollIntoView({ behavior: "smooth" });
    },
    scrollView(ev) {
      let top = ev.target.scrollTop;
      let len = this.posArr.length - 1;
      for (let i = 0; i <= len; i++) {
        if (
          (top >= this.posArr[i] && top <= this.posArr[i + 1]) ||
          top >= this.posArr[len]
        ) {
          this.active = i;
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.cates.forEach(item => {
        let top = this.$refs["view_" + item.id][0].offsetTop;
        this.posArr.push(top);
      });
    }, 60);
  }
};
</script>

<style>
.classify {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

.classify .leftnav,
.classify .content {
  height: 100%;
  overflow: auto;
}

.classify .leftnav::-webkit-scrollbar {
  display: none;
}

.classify .leftnav {
  position: absolute;
  width: 1.64rem;
  height: calc(100vh - 1.9rem);
  border-right: 1px solid #f0f0f0;
  background-color: white;
  z-index: 10;
}

.classify .leftnav li {
  position: relative;
  line-height: 1.1rem;
  font-size: 0.24rem;
  text-align: center;
  font-weight: bold;
  color: #0b0b0b;
  cursor: pointer;
}

.classify .leftnav li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.classify .leftnav li.active {
  color: #ee0204;
}

.classify .leftnav li.active::before {
  position: absolute;
  content: " ";
  width: 0.05rem;
  height: 0.33rem;
  background-color: #ee0204;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.classify .content {
  position: relative;
  padding-left: 1.89rem;
  padding-right: 0.26rem;
}

.classify .product-title {
  text-align: center;
}

.classify .product-title img {
  margin-top: 0.32rem;
  margin-bottom: 0.32rem;
  width: 5.35rem;
  height: auto;
}

.classify .product-title h4 {
  margin-top: 0.16rem;
  margin-bottom: 0.16rem;
  font-size: 0.22rem;
}

.classify .product-title h4::before {
  content: "── ";
}

.classify .product-title h4::after {
  content: " ──";
}

.classify .product-list {
  overflow: hidden;
}

.classify .product-list a {
  float: left;
  width: 50%;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 0.34rem;
  padding-left: 0.09rem;
  padding-right: 0.09rem;
}

.classify .product-list a img {
  width: 1.22rem;
  height: auto;
}

.classify .product-list .desc,
.classify .product-list h4 {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.classify .product-list h4 {
  font-size: 0.18rem;
}

.classify .product-list .desc {
  color: #b2b2b2;
  font-size: 0.16rem;
}

.classify .product-list .price {
  font-weight: bold;
  font-size: 0.18rem;
}
</style>