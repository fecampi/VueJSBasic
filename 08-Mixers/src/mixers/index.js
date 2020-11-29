import Vue from 'vue'
Vue.mixin({
	data() {
		return {
			global: 'Mixin Global!'
		}
	},
	created() {
		console.log('Created - Mixin Global!')
	}
})