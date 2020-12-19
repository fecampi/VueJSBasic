//Icons(npm i font-awesome --save)
import Vue from 'vue'
import App from './App.vue'

//utils
import '@/utils'

//store
import store from '@/store'

//Touter
import router from './router';

Vue.config.productionTip = false



new Vue({
  store,
  router,

  render: h => h(App),
}).$mount('#app')
