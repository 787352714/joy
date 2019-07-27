import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test.vue'
import vcharts from '@/components/vcharts/vcharts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path:'/charts',
      name:'charts',
      component:vcharts,
    }
  ]
})
