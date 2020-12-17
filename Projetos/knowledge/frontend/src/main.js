//Icons(npm i font-awesome --save)
import Vue from 'vue'
import App from './App.vue'

//utils
import '@/utils'
import store from './store/store'




Vue.config.productionTip = false

new Vue({
  store,

  render: h => h(App),
}).$mount('#app')
