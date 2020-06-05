import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Index from '../views/Index'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    component: Index
  },
  {
    path:'/pushcard',
    name:'发布动态',
    component: () => import(/* webpackChunkName: "pushcard" */ '../views/Pushcard.vue')
  },
  {
    path:'/eat',
    component: () => import(/* webpackChunkName: "pushcard" */ '../views/Eat.vue')
  },
  {
    path:'/me',
    name:'我的',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  }
  ,
  {
    path:'/encyclopedias',
    name:'百科',
    component: () => import(/* webpackChunkName: "encyclopedias" */ '../views/Encyclopedias.vue')
  },
  {
    path:'/encyArticle',
    component: () => import(/* webpackChunkName: "encyArticle/:id" */ '../components/EncyArticle.vue')
  },
  {
    path:'/sport',
    name:'运动',
    component: () => import(/* webpackChunkName: "sport" */ '../views/Sport.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
