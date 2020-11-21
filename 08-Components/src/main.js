import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'




Vue.config.productionTip = false

//Registrar Globalmente os componentes
Vue.component('app-contadores', Contadores) 


new Vue({
  render: h => h(App),
}).$mount('#app')