import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store';
import './assets/style/common.scss'
import './assets/rem/rem';
import './assets/style/base.scss';

if (process.env.NODE_ENV !== 'production' && !process.env.VUE_APP_BASE_PATH) {
  const Mock = require('./mock/index').default
  Mock.mockData()
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
