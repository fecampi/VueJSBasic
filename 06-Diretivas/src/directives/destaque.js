import Vue from 'vue';


//diretiva simples
Vue.directive('destaque-lightgreen', {
	bind(el) {
		el.style.backgroundColor = "lightgreen"
	}
})



Vue.directive('destaque', {
	bind(el, binding) {


		// Diretiva:argumento.modificadores
		// <p v-destaque:fundo.atrasar="'yellow'">

		//se tiver o Modificador
		let atraso = 0
		if (binding.modifiers['atrasar']) { atraso = 3000 }

		//Argumento
		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})