<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Mostrar Mensagem</b-button
    >

    <!-- <FadeCssTransition>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </FadeCssTransition>

    <SlideXCssTransition>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </SlideXCssTransition>

    <SlideYCssTransition>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </SlideYCssTransition> -->

    <SwitchTransition :show="exibir">
      <b-alert variant="info">Olá</b-alert>
    </SwitchTransition>

    <!-- 
		
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-2"
				@click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary"
				@click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->

    <hr />
    <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)">{{
          aluno
        }}</b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";
import FadeCssTransition from "./transitions/FadeCssTransition";
import SlideYCssTransition from "./transitions/SlideYCssTransition";
import SlideXCssTransition from "./transitions/SlideXCssTransition";
import Vue2Transitions from "./transitions/Vue2Transitions";
import SwitchTransition from "./transitions/SwitchTransition";
export default {
  components: {
    Vue2Transitions,
    AlertaAdvertencia,
    AlertaInfo,
    FadeCssTransition,
    SlideYCssTransition,
    SlideXCssTransition,
    SwitchTransition,
  },
  data() {
    return {
      alunos: ["Roberto", "Julia", "Teresa", "Paulo"],
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
    };
  },
  methods: {
    mounted() {
      this.exibir = true;
    },
    adicionarAluno() {
      const s = Math.random().toString(36).substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    // afterEnter(el) {
    // 	console.log('afterEnter')
    // },
    // enterCancelled() {
    // 	console.log('enterCancelled')
    // },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    // afterLeave(el) {
    // 	console.log('afterLeave')
    // },
    // leaveCancelled() {
    // 	console.log('enterCancelled')
    // },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
