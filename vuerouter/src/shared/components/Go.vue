<template>
  <button sucesso @click="irParaInicio">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
    },
  },
  methods: {
    irParaInicio() {
      // this.$router.push('/')
      // this.$router.push({ path: this.to })
      this.$router.push({ name: "Index" });
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

.autor {
  float: right;
}
</style>
