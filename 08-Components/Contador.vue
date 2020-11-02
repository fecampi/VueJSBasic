<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="subtrair">-</button>
    <button @click="adicionar">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

//scoped - Estilo é aplicado só dentro do componente
<style scoped>
span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

/*nome do button com seu estilo especifico na dom*/
/*button[data-v-6cbbf471]*/
button{
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: rgb(80, 92, 255);
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>
