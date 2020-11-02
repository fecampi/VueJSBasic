import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//(Registra globalmente o componente)
import Contadores from './Contadores.vue'
Vue.component('app-contadores', Contadores) 


new Vue({
  render: h => h(App),
}).$mount('#app')
