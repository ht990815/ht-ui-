import Vue from 'vue'
import App from './App.vue'
import HtUI from '../packages/index.js'
Vue.use(HtUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')