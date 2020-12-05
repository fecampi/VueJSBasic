<template>
  <div>
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
export default {
  data() {
    return {
      alunos: ["Roberto", "Julia", "Teresa", "Paulo"],
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
  },
};
</script>


<style scoped>

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>