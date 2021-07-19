const home = {
  data(){
    return {
      slides: [
        {id:1, picurl:'images/slide1.jpg',path:'/about' },
        {id:2, picurl:'images/slide2.jpg',path:'/contact' },
        {id:3, picurl:'images/slide3.jpg',path:'/user' },
      ],
      officals:[
        {id:1,icon:"iconfont iconzhengpin",title:"官方正品"},
        {id:2,icon:"iconfont iconkuaidi",title:"顺丰极速达"},
        {id:3,icon:"iconfont iconxinaixin",title:"全国联保"},
        {id:4,icon:"iconfont iconshandian",title:"镭雕定制"},
      ],
      open:0,
    }
  },
  template:`
  <div class="main">

    <ly-swiper
    :data="slides"
    pageCls="vivo-pagination"
    pager
    autoplay
    loop></ly-swiper>

    <div class="official">
      <ul>
        <li 
        v-for="item in officals"
        :key="item.id">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>

    <div class="new">
      <p>新品专区</p>
      <div class="iqoo">
        <img src="images/5g.png" class="img-fit">
        <div class="iqoo5">
          <p class="iq">iQOO5系列</p>
          <p>￥3988起</p>
        </div>
        <div class="retail">
          <ul class="retail-1">
            <li>皓影</li>
            <li>星溯</li>
            <li>赛道版</li>
            <li>传奇版</li>
          </ul>
          <ul class="retail-2">
            <li>骁龙865<i>|</i></li>
            <li>1/1.3”超大底主摄<i>|</i></li>
            <li>120W超快闪充</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div class="value">
        <p>超值拼团</h3>
        <div class="usb">
          <ul>
            <li><a href="#"><img src="images/usb.png" class="img-fit">
                <p class="ausb">vivo 2A USB数据线</p>
                <p class="wusb">支持18W/10W双引擎闪充数据线</p>
                <p class="price">拼团价：<span>￥9.9</span></p><del>$19</del>
              </a></li>
            <li><a href="#"><img src="images/usb.png" class="img-fit">
                <p class="ausb">vivo 2A USB数据线</p>
                <p class="wusb">支持18W/10W双引擎闪充数据线</p>
                <p class="price">拼团价：<span>￥9.9</span></p><del>$19</del>
              </a></li>
            <li><a href="#"><img src="images/usb.png" class="img-fit">
                <p class="ausb">vivo 2A USB数据线</p>
                <p class="wusb">支持18W/10W双引擎闪充数据线</p>
                <p class="price">拼团价：<span>￥9.9</span></p><del>$19</del>
              </a></li>
          </ul>
        </div>
        <div class="more">
          <p><a>查看更多<i class="iconfont iconarrow-right-copy"></i></a></p>
        </div>
      </div>


      <div class="sale">
        <p>热销机型</p>
        <div class="hot">
          <ul>
            <li><a href="#"><img src="images/phone1.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
            <li><a href="#"><img src="images/phone1.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
          </ul>
          <ul>
            <li><a href="#"><img src="images/phone1.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
            <li><a href="#"><img src="images/phone1.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
          </ul>
          <ul>
            <li><a href="#"><img src="images/phone1.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
            <li><a href="#"><img src="images/phone1.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
          </ul>
        </div>
        <div class="more">
          <p><a>查看更多<i class="iconfont iconarrow-right-copy"></i></a></p>
        </div>
      </div>


      <div class="boutique">
        <p>精品配件</p>
        <div class="parts">
          <ul>
            <li><a href="#"><img src="images/phone2.png" class="img-fit"></a>
              <p class="x30">X30 Pro手机保护壳</p>
              <p class="pro">奇境系列保护壳 极地畅想</p>
              <p class="pri">￥29</p>
            </li>
            <li><a href="#"><img src="images/phone3.png" class="img-fit"></a>
              <p class="x30">iQOO 5A Type-C胶囊数据线</p>
              <p class="pro">5A大电流 | 线夹收纳 | 官方品质</p>
              <p class="pri">￥3698</p>
            </li>
          </ul>
          <ul>
            <li><a href="#"><img src="images/phone2.png" class="img-fit"></a>
              <p class="x30">X30 Pro手机保护壳</p>
              <p class="pro">奇境系列保护壳 极地畅想</p>
              <p class="pri">￥29</p>
            </li>
            <li><a href="#"><img src="images/phone3.png" class="img-fit"></a>
              <p class="x30">iQOO 5A Type-C胶囊数据线</p>
              <p class="pro">5A大电流 | 线夹收纳 | 官方品质</p>
              <p class="pri">￥3698</p>
            </li>
          </ul>
          <ul>
            <li><a href="#"><img src="images/phone2.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
            <li><a href="#"><img src="images/phone3.png" class="img-fit"></a>
              <p class="vi">iQOO3</p>
              <p class="vo">骁龙865+双模5G</p>
              <p class="much">￥3698</p>
            </li>
          </ul>
        </div>
        <div class="more">
          <p><a>查看更多<i class="iconfont iconarrow-right-copy"></i></a></p>
        </div>
      </div>

  </div>
  `
}