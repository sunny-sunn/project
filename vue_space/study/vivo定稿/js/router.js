const router = new VueRouter({
  linkActiveClass:'active',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home, meta: { title: 'vivo官方商城' } },
    { path: '/classify', component: classify, meta: { title: '全部分类' } },
    { path: '/user', component: user, meta: { title: '个人中心' } },
  ]
});