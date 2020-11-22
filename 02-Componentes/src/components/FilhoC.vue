<template>
  <div class="componente">
    <h4>Filho C (Emitindo Evento)</h4>
    <p>
      Enviando para o Pai: <input type="text" v-model="propsC" />
      <button @click="setPropsA(propsC)">Enviar</button>
    </p>
  </div>
</template>

<script>
export default {

  data() {
    return {};
  },
  methods: {
    setPropsA(p) {
      this.$emit("changePropsC", p);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec4;
  color: #fff;
}
</style>
