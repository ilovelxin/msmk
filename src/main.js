import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/rem'  // 引入 rem.js
import './js/vant' // 引入vant.js
import './css/common.css'  // 引入 common.css
import http from './utils/request'  // 导出封装的接口方法
Vue.prototype.$http=http     // 将封装的接口挂载到vue原型上
import QRCode from "qrcodejs2"; // 生成二维码插件
Vue.prototype.$p=QRCode
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
