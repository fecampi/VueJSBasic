import Vue from 'vue';


// <!-- Diretiva:argumento.modificador1.modificador2 -->
// <p
//   v-destaque-local:fundo.atrasar.alternar="{
// 	cor1: 'green',
// 	cor2: 'red',
// 	atraso: 2000,
// 	intervalo: 200,
//   }"
// >


Vue.directive("destaque-local", {
	bind(el, binding) {


		const cor1 = binding.value.cor1;
		const cor2 = binding.value.cor2;
		let corAtual = cor1;


		let atraso = (binding.modifiers["atrasar"])
			? binding.value.atraso
			: 0

		const aplicarCor = (cor) => {
			(binding.arg === "fundo")
				? el.style.backgroundColor = cor
				: el.style.color = cor;
		}

		const alternar = () => {
			setInterval(() => {
				corAtual = (corAtual === cor1)
					? cor2
					: cor1;
				aplicarCor(corAtual);
			}, binding.value.intervalo);
		}

		setTimeout(() => {
			(binding.modifiers["alternar"])
				? alternar()
				: aplicarCor(cor1);

		}, atraso);
	},
})