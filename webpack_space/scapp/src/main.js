import './style.css';

import './reset.less';

import img from './img.jpg';

import Vue from 'vue';

import App from './App.vue';

console.log(img);

new Vue({
  render: h => h(App),
}).$mount("#app");