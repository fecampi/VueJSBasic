<script>
export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    valorTotal: {
      get() {
        return this.$store.getters.valorTotal;
      },
    },
    produtos: {
      get() {
        return this.$store.state.carrinho.produtos;
      },
    },
  },
  methods: {
    adicionar(quantidade, preco) {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade,
        preco,
      };
      this.sequencia++;
      this.$store.dispatch('adicionarProduto',produto)
    
    },
  },
};
</script>
