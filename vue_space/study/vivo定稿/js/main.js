const app = new Vue({
  el: '#app',
  router,
  data:{
    navs:[
      {id:1,name:'首页',icon:'van-icon-wap-home-o',path:'/home'},
      {id:2,name:'分类',icon:'van-icon-apps-o',path:'/classify'},
      {id:3,name:'我的',icon:'van-icon-contact',path:'/user'},
    ]
  },
});