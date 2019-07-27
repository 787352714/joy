import Vue from 'vue'
import Router from 'vue-router'
import todo from '../components/todo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'todo',
      component: todo,
    }
  ]
})
