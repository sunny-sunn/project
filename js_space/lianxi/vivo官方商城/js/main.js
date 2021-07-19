+function( doc ){

  var DEFAULTS = {
    active: 0,
    eventType: 'click',
    change: function(){},
  }

  function Tab(selector, options){

    options = Object.assign({}, DEFAULTS, options);

    doc.querySelectorAll(selector).forEach(function(tab){
      var lis = tab.querySelectorAll('.tab-nav li');
      var panels = tab.querySelectorAll('.tab-panel');

      setTimeout(function(){
        lis[options.active].dispatchEvent( new Event( options.eventType )  );
      },0)
     
      lis.forEach(function(li){
        li.addEventListener(options.eventType,function(){
          lis.forEach(function(li){
            li.classList.remove('active');
          })
          this.classList.add('active');

          var index = Array.from(lis).indexOf(this);

          panels.forEach(function(panel){
            panel.classList.remove('active');
          })

          panels[index].classList.add('active');

          options.change && options.change(this);

        })
      })

    })

  }

  window.Tab = Tab;

}( document );

var t1 = new Tab('#tab',{
  active: 0
});



window.onload = function () {
  function $(param) {
    if (arguments[1] == true) {
      return document.querySelectorAll(param);
    } else {
      return document.querySelector(param);
    }
  }
  var $swiper = $(".swiper");
  var $swiperItems = $('.swiper_item ul');
  var $swiperItem = $(".swiper_item ul li", true);
  var $swiperPages = $(".swiper_pages ul");
  var $length = $swiperItem.length;

  $swiperItems.style.width = $length + 'px'; 

  var str = "";
  for (var i = 0; i < $length; i++) {
    if (i == 0) {
      str += "<li class='active'>" + (i + 1) + "</li>";
    } else {
      str += "<li>" + (i + 1) + "</li>";
    }
  }
  $swiperPages.innerHTML = str;

  var current = 1;

  var timer;
  timer = setInterval(go, 2000);
  function go() {
    for (var j = 0; j < $length; j++) {
      $swiperItem[j].className = "";
      $swiperPages.children[j].className = "";
    }
    if ($length == current) {
      current = 0;
    }
    $swiperItem[current].className = "open";
    $swiperPages.children[current].className = "active";
    current++;
  }
  
  for (var k = 0; k < $length; k++) {
    $swiperItem[k].onmouseover = function () {
      clearInterval(timer);
    }
    $swiperItem[k].onmouseout = function () {
      timer = setInterval(go, 2000);
    }
  }

  for (var u = 0; u < $length; u++) {
    $swiperPages.children[u].index = u;
    $swiperPages.children[u].onmouseover = function () {
      clearInterval(timer);
      for (var j = 0; j < $length; j++) {
        $swiperItem[j].className = "";
        $swiperPages.children[j].className = "";
      }
      this.className = "active";
      $swiperItem[this.index].className = "open";
      current = this.index + 1;
    }
    $swiperPages.children[u].onmouseout = function () {
      timer = setInterval(go, 1000);
    }
  }
  
}