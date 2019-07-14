import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import input from '@/components/input.vue'
import home from '@/components/home.vue'
import faToCh from '../components/faToCh/fatherEvent'
import debounce from '../components/debounce/debounce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/faToCh',
      name: 'faToCh',
      component: faToCh
    },
    {
      path: '/debounce',
      name: 'debounce',
      component: debounce
    }
  ]
})
