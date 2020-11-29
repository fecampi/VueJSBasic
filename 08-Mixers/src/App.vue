<template>
	<div id="app">
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</div>
	</div>
</template>

<script>
import frutasMixin from './mixers/frutasMixin'

import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	mixins: [frutasMixin],
	
	data() {
		return {
			frutas: ['abacate']
		}
	},

}
</script>

