<template>
  <div>
    <hr />
    <button @click="exibir2 = !exibir2">Alternar</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exibir2: true,
      larguraBase: 0,
    };
  },
  methods: {
    mounted() {
      this.exibir = true;
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

    //Os 4 Metodos de ciclo de vida

    //Antes de entrar
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },

    //Entrar
    enter(el, done) {
      this.animar(el, done, false);
    },

    //Antes de sair
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },

    //Sair
    leave(el, done) {
      this.animar(el, done, true);
    },
  },
};
</script>

<style scoped>
.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
