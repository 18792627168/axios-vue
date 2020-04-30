import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,    // 组件注册
    // meta: {
    //   keepAlive: true
    // }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    // 按需加载组件，如果不访问时，是不会加载这个组件的
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // meta: {
    //   keepAlive: true
    // }
  },
  {
    path: '/2-2',
    name: 'axios请求方法',
    component:() => import('../views/2-2.vue')
  },
  {
    path: '/2-3',
    name: 'axios并发请求',
    component:() => import('../views/2-3.vue')
  },
  {
    path: '/contactList',
    name:'联系人列表',
    component: () => import('../views/ContactList.vue')
  }                               
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
