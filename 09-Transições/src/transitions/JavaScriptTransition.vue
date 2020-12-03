<template>
  <div>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
  </div>
</template>
<script>

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

<style scoped>
.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
