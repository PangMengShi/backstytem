// 模块化a
import Vue from 'vue'

// 1.引入路由 b
import VueRouter from 'vue-router'

// 第三步: 组件(引入组件)
import Login from './components/login/login.vue'
import Home from './components/home/home.vue'

// 在模块化工程中,必须要使用use明确的安装一个路由功能c
Vue.use(VueRouter)

// 2.实例化路由
const router = new VueRouter({
  // 第二步:规则
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
  ]
})

// 3.通过es6模块化语法,把router导出去
export default router
