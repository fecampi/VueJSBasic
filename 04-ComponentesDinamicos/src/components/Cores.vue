<template>
  <div>
    <button @click="numero++">Troca</button>
    <Cor>
      <h1 slot="cor">{{ cores[indice] }}</h1>
    </Cor>
  </div>
</template>

<script>
import Cor from "./Cor.vue";

export default {
  components: { Cor },
  data() {
    return {
      numero: 0,
      cores: ["Azul", "Vermelho", "Verde"],
    };
  },
  computed: {
    indice() {
      //Retornando valor absoluto(sem negativo)
      return Math.abs(this.numero % 3);
    },
  },
};
</script>

