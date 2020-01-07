import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import input from '@/components/input.vue'
import home from '@/components/home.vue'
import faToCh from '../components/faToCh/fatherEvent'
import debounce from '../components/debounce/debounce'
import animotion from '../components/animotion'
import swiper from '../components/swiper/swiper'
import Layout from '../components/Layout/Layout.vue'
import Issues from '../components/issueTest/Issues.vue'
import VueHoc from '../components/VueHoc/VueHoc.vue'

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
    },
    {
      path: '/animotion',
      name: 'animotion',
      component: animotion
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Issues',
      name: 'Issues',
      component: Issues
    },
    {
      path: '/VueHoc',
      name: 'VueHoc',
      component: VueHoc
    },
  ]
})
