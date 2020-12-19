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


//Temporary
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImZlbGlwZSIsImVtYWlsIjoiZmVsaXBlQGZlbGlwZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA4MzkyNDU4LCJleHAiOjE2MDg2NTE2NTh9.9fdZ7X7aIeiwMWrdhFA5MBW9yCx9eIFdAmDHhZgUmzI'

new Vue({
  store,
  router,

  render: h => h(App),
}).$mount('#app')
