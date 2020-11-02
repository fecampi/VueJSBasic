<template>
  <div class="componente">
    <h4>Filho</h4>
    <p>
      Interno:
      <strong>{{ interno}}</strong>
      Volume:
      <strong>{{ volume}}</strong>
    </p>
    <p>
      <strong>{{ inverterNome() }}</strong>
      <br />
    </p>
    <p>
      Alterar Pai
      <button @click="setNome('Gilberto')">Gilberto</button>
      <button @click="setNome('Renato')">Renato</button>
      <button @click="nome='outro'">Outro</button>
   
        
    </p>

    <p>
      Empresa do Usuário:
      <strong>{{empresa}}</strong>
    </p>
  </div>
</template>

<script>

export default {
  props: {
    nome: {
      type: String,
    },
    empresa: {
      type: String,
      default: "Desempregado",
    },
    setNome: Function,
    volume: Number
   
  },
  data() {
    return {
      interno: "OI",
    };
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
