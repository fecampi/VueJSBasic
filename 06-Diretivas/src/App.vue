<template>
  <div id="app">
    <h1>Diretivas</h1>

    <p v-text="'Usando diretiva'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <!-- cuidado, pode ter falha de segurança -->

    <p v-destaque-lightgreen>Usando diretiva personalizada</p>

    <!-- Passando uma variavel para o binding -->
    <p v-destaque.atrasar="cor">
      Usando diretiva personalizada(v-destaque.atrasar)
    </p>

    <p v-destaque:fundo.atrasar="'yellow'">Usando diretiva personalizada</p>

    <!-- Diretiva:argumento.modificador1.modificador2 -->
    <p
      v-destaque-local:fundo.atrasar.alternar="{
        cor1: 'green',
        cor2: 'red',
        atraso: 2000,
        intervalo: 200,
      }"
    >
      Usando diretiva personalizada(Local)
    </p>
    <p v-destaque-local.atrasar="{ cor1: 'red', atraso: 5000 }">
      Usando diretiva personalizada
    </p>

    <button
      v-quando:click="acao"
      v-quando:mouseenter="mouseEnter"
      v-quando:mouseleave="mouseLeave"
    >
      Teste mouse event!
    </button>
  </div>
</template>

<script>
import localDirectives from "./directives/localDirectives";
export default {
  components: {},
  directives: {
    localDirectives,
    quando: {
      bind(el, binding) {
        const tipo = binding.arg;
        const fn = binding.value;
        // tipo de evento e o que fazer com ele
        el.addEventListener(tipo, fn);
      },
    },
  },
  data() {
    return {
      cor: "red",
    };
  },
  methods: {
    acao() {
      alert("Ação executada!");
    },
    mouseEnter() {
      console.log("Mouse enter!");
    },
    mouseLeave() {
      console.log("Mouse leave!");
    },
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
  font-size: 2.5rem;
}
</style>
