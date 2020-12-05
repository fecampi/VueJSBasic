<template>
  <div>
    <hr />
    <div class="mb-4">
      <b-button
        variant="primary"
        class="mr-2"
        @click="componenteSelecionado = 'AlertaInfo'"
        >Info</b-button
      >
      <b-button
        variant="secondary"
        @click="componenteSelecionado = 'AlertaAdvertencia'"
        >Advertência</b-button
      >
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>

    <hr />
  </div>
</template>

<script>
import AlertaAdvertencia from "../components/AlertaAdvertencia";
import AlertaInfo from "../components//AlertaInfo.vue";

export default {
   components: {
    AlertaAdvertencia,
    AlertaInfo,
  },
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false,
      componenteSelecionado: "AlertaInfo",
    };
  },
};
</script>

<style>
</style>