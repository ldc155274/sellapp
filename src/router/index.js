import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      // 商品二级页面
      path: '/goods',
      name: 'goods',
      component: () => import('../views/Goods')
    },{
      // 评价二级页面
      path: '/evaluate',
      name: 'evaluate',
      component: () => import('../views/Evaluate')
    },{
      // 商家二级页面
      path: '/merchant',
      name: 'merchant',
      component: () => import('../views/Merchant')
    }]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
