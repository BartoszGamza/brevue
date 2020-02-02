import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MethodsMenu from '@/components/MethodsMenu'
import MethodMain from '@/components/MethodMain'
import MethodPreparation from '@/components/MethodPreparation'

const routes = [
  {
    path: '/',
    component: MethodsMenu
  },
  {
    path: '/overview',
    component: MethodMain,
    name: 'overview'
  },
  {
    path: '/preparation',
    component: MethodPreparation,
    name: 'preparation'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
