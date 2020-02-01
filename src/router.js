import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MethodsMenu from '@/components/MethodsMenu'

const routes = [
  {
    path: '/',
    component: MethodsMenu
  }
]

const router = new VueRouter({
  routes
})

export default router
