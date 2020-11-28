import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Importando a diretiva
import './directives';


new Vue({
	render: h => h(App),
}).$mount('#app')
