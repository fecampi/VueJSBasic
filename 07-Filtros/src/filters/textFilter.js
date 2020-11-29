import Vue from 'vue'


Vue.filter('inverterFilter', function(valor) {
	return valor.split('').reverse().join('')
})

