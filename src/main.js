// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import "@/assets/less/index.less";

fastclick.attach(document.body)//解决移动端点击300ms延迟

Vue.config.productionTip = false
Vue.prototype.$http = axios; //挂载到vue上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
