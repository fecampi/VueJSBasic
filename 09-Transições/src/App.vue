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

    <SlideYCssTransition />

    <Vue2Transitions />

    <SwitchTransition :show="exibir" />

    <JavaScriptTransition/> 

    <DynamicComponentTransition/>
    <GroupTransition/>


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
import GroupTransition from "./transitions/GroupTransition"

export default {
  components: {
    GroupTransition,
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
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false,
    };
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
