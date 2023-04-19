import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    component : () => import('@/views/PageNotFound.vue')
  },
  {
    path:'/',
    redirect : '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/signUp',
    component: () => import('@/views/SignUpPage.vue')
  },
]

const router = new VueRouter({
  mode : 'history', // url 중간 #이 삭제됨
  routes
})

export default router
