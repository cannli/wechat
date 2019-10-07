//import 'babel-polyfill'
import Vue from 'vue'
//import './element/index.js'
//import 'normalize.css' // A modern alternative to CSS resets
//import 'element-ui/lib/theme-chalk/index.css'


import router from './router'
import ku from './assets/js/ku.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'assets/icon/iconfontXin.css'
Vue.use(ElementUI);
import common from './assets/js/common'
import store from './store'
import App from './App.vue'
import 'assets/icon/iconfontXin.js'

Vue.use(ku)
Vue.use(common)
// Vue.component('loading', loading)
// Vue.component('tableNodata', tableNodata)

// window.absContext = '/abs-gateway/abs'
// window.absContextPro = '/abs-gateway/abs-product'
// window.absContextDuration = '/abs-gateway/abs-duration'
// window.absContextDurationV2 = '/abs-gateway/abs-durationV2'

// 本地环境
// window.absContext = (window.location.port === '6565' ? 'http://localhost:9092' : '') + '/abs-gateway/abs'
// window.absContextDuration = (window.location.port === '6565' ? 'http://localhost:9092' : '') + '/abs-gateway/abs-duration'
// window.absContextPro = (window.location.port === '6565' ? 'http://localhost:9092' : '') + '/abs-gateway/abs-product'
// window.absContextDurationV2 = (window.location.port === '6565' ? 'http://localhost:9092' : '') + '/abs-gateway/abs-durationV2'
// window.absContextPrivilege = (window.location.port === '6565' ? 'http://localhost:9092' : '') + '/abs-gateway/abs-privilege'

// 测试环境
window.absContext = (window.location.port == '6565' ? 'https://abstest.tenpay.com/abs-gateway/abs' : '')
window.absContextDuration = (window.location.port == '6565' ? 'https://abstest.tenpay.com/abs-gateway/abs-duration' : '')
window.absContextPro = (window.location.port == '6565' ? 'https://abstest.tenpay.com/abs-gateway/abs-product' : '')
window.absContextDurationV2 = (window.location.port == '6565' ? 'https://abstest.tenpay.com/abs-gateway/abs-durationV2' : '')
window.absContextPrivilege = (window.location.port === '6565'? 'https://abstest.tenpay.com/abs-gateway/abs-privilege' : '')

// 开发环境
// window.absContext = (window.location.port == '6565' ? 'https://absdev.tenpay.com/abs-gateway/abs' : '')
// window.absContextDuration = (window.location.port == '6565' ? 'https://absdev.tenpay.com/abs-gateway/abs-duration' : '')
// window.absContextPro = (window.location.port == '6565' ? 'https://absdev.tenpay.com/abs-gateway/abs-product' : '')
// window.absContextDurationV2 = (window.location.port == '6565' ? 'https://absdev.tenpay.com/abs-gateway/abs-durationV2' : '')
// window.absContextPrivilege = (window.location.port == '6565' ? 'https://absdev.tenpay.com/abs-gateway/abs-privilege' : '')

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

