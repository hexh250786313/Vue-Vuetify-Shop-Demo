import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Home = resolve => require(['@/views/Home.vue'], resolve)
const Login = resolve => require(['@/views/Login.vue'], resolve)

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
  }]
})
