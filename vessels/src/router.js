import Router from 'vue-router'
import Home from './views/Home.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'home',
      component: Home
    },
    {
      path: '/vessels',
      name: 'vessels',
      component: () => import('./views/Vessels.vue')
    },
    {
      path: '/',
      name: 'main'
    }
  ]
})
