<template>
  <div class="main user">
    <div class="toper">
      <ul class="one">
        <li>
          <img src="../assets/images/head.png" />
        </li>
        <li>
          <p class="nam">张三</p>
          <p class="num">158****6666</p>
        </li>
        <li>
          <a href="#">
            账号管理
            <i class="iconfont iconarrow-right-copy"></i>
          </a>
        </li>
      </ul>
      <ul class="two">
        <li>我的订单</li>
        <li>
          <a href="#">
            更多
            <i class="iconfont iconarrow-right-copy"></i>
          </a>
        </li>
      </ul>
      <ul class="three">
        <li>
          <a href="#">
            <i class="iconfont icondaifukuan"></i>
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icondaishouhuo-copy"></i>
            <p>待收货</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icondaipingjia"></i>
            <p>待评价</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icontuihuo"></i>
            <p>退货/退款</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="bottom">
      <ul>
        <li>
          <a href="#">
            <i class="iconfont iconquan"></i>
            <span>我的优惠券</span>
            <i class="iconfont iconarrow-right-copy"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont iconshoucang"></i>
            <span>我的收藏</span>
            <i class="iconfont iconarrow-right-copy"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont iconassess"></i>
            <span>我的评价</span>
            <i class="iconfont iconarrow-right-copy"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icondizhi"></i>
            <span>我的收货地址</span>
            <i class="iconfont iconarrow-right-copy"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.user {
  height: 100vh;
  background-color: #f0f0f0;
}
.toper {
  height: 265px;
  padding: 0 20px;
  background-color: #ffeded;
  background-image: linear-gradient(transparent, white);
}
.toper ul li {
  float: left;
}
.toper ul::after {
  display: block;
  content: "";
  clear: both;
}
.toper ul li img {
  display: block;
  width: 73px;
  border-radius: 50%;
}
.toper ul.one {
  position: relative;
  padding: 30px 0;
}
.toper ul.one li {
  position: relative;
  line-height: 75px;
}
.toper ul.one li p.nam {
  font-size: 0.2rem;
  font-weight: bold;
  padding-left: 10px;
}
.toper ul.one li p.num {
  position: absolute;
  top: 20px;
  color: #b0afaf;
  padding-left: 10px;
}
.toper ul.one li:last-child {
  position: absolute;
  right: 0;
  color: #b0afaf;
}
.toper ul.two {
  position: relative;
  margin-bottom: 30px;
}
.toper ul.two li:first-child {
  font-size: 0.16rem;
}
.toper ul.two li:last-child {
  position: absolute;
  right: 0;
  color: #b0afaf;
}
.toper ul.three li {
  width: 25%;
  text-align: center;
}
.toper ul.three li i {
  font-size: 22px;
  color: red;
  font-weight: bold;
}
.bottom {
  background-color: #fff;
  margin-top: 10px;
  padding: 0 20px;
}
.bottom ul li {
  position: relative;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #f7f7f7;
}
.bottom ul li span {
  font-size: 0.14rem;
  padding-left: 10px;
}
.bottom ul li i:first-child {
  font-size: 18px;
}
.bottom ul li i:last-child {
  position: absolute;
  right: 0;
  color: #c6c6c6;
}
</style>
