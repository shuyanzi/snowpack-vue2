import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import TestTsx from './pages/TestTsx.vue'
const routes = [
  {
    path: '/test-tsx',
    component: TestTsx
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router