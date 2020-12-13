<script>
export default {
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;
      },
      set(valor) {
        this.$store.commit("setQuantidade", valor);
      },
    },
    preco: {
      get() {
        return this.$store.state.parametros.preco;
      },
      set(valor) {
        this.$store.commit("setPreco", valor);
      },
    },
  },
};
</script>

