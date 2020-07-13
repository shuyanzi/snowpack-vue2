// import Vue from 'vue/dist/vue.esm.browser.js'
import Vue from 'vue'
import App from './App.vue'
import a from '@/utils/common'
import router from './router'
console.log('a', a)
// console.log('vue:', Vue)
// import 'vue-tsx-support/enable-check'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
