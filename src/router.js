import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Home = resolve => require(['@/views/Home.vue'], resolve)
const Login = resolve => require(['@/views/Login.vue'], resolve)
const Cart = resolve => require(['@/views/Cart.vue'], resolve)
const Departments = resolve => require(['@/views/Departments.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: '首页',
    component: Home
  }, {
    path: '/login',
    name: '登录',
    component: Login
  }, {
    path: '/cart',
    name: '购物车',
    component: Cart,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录才能进入的
    }
  }, {
    path: '/departments',
    name: '专区',
    component: Departments
  }, {
    path: '/detail/:id',
    name: '商品详情',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
