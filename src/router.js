import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MethodsMenu from '@/components/MethodsMenu'
import MethodMain from '@/components/MethodMain'

const routes = [
  {
    path: '/',
    component: MethodsMenu
  },
  {
    path: '/overview',
    component: MethodMain,
    name: 'overview'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
