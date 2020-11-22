<template>
  <div class="componente">
    <h4>Filho B (Função callback)</h4>
    <p>
     Enviando para o Pai: <input type="text" v-model="propsB" />
     <button @click="setPropsB(propsB)">Enviar</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
   setPropsB: Function,
  },

  data() {
    return {
     propsB: '',
    };
  },
  methods: {},
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec48;
  color: #fff;
}
</style>
