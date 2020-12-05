<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Mostrar Mensagem</b-button
    >

  <FadeCssTransition>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </FadeCssTransition>

    <SlideXCssTransition>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </SlideXCssTransition>

    <SlideYCssTransition>
    
    </SlideYCssTransition> 

    <SwitchTransition :show="exibir" /> 

    <JavaScriptTransition> </JavaScriptTransition>
    <DynamicComponentTransition></DynamicComponentTransition>  


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
import FadeCssTransition from "./transitions/FadeCssTransition";
import SlideYCssTransition from "./transitions/SlideYCssTransition";
import SlideXCssTransition from "./transitions/SlideXCssTransition";
import Vue2Transitions from "./transitions/Vue2Transitions";
import SwitchTransition from "./transitions/SwitchTransition";
import JavaScriptTransition from "./transitions/JavaScriptTransition";
import DynamicComponentTransition from "./transitions/DynamicComponentTransition";
export default {
  components: {
    Vue2Transitions,
    FadeCssTransition,
    SlideYCssTransition,
    SlideXCssTransition,
    SwitchTransition,
    JavaScriptTransition,
    DynamicComponentTransition,
  },
  data() {
    return {
      alunos: ["Roberto", "Julia", "Teresa", "Paulo"],
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false,
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
</style>
