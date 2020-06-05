import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Index from '../views/Index'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path:'/pushcard',
    component: () => import(/* webpackChunkName: "pushcard" */ '../views/Pushcard.vue')
  },
  {
    path:'/eat',
    component: () => import(/* webpackChunkName: "pushcard" */ '../views/Eat.vue')
  },
  {
    path:'/me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  }
  ,
  {
    path:'/encyclopedias',
    component: () => import(/* webpackChunkName: "encyclopedias" */ '../views/Encyclopedias.vue')
  },
  {
    path:'/encyArticle',
    component: () => import(/* webpackChunkName: "encyArticle/:id" */ '../components/EncyArticle.vue')
  },
  {
    path:'/sport',
    component: () => import(/* webpackChunkName: "sport" */ '../views/Sport.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
