<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
    };
  },

  methods: {
    ...mapMutations("carrinho", ["setQuantidade", "setPreco"]),
    ...mapActions("carrinho", ["adicionarProduto"]),
    adicionar(quantidade, preco) {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade,
        preco,
      };
      this.sequencia++;
      this.adicionarProduto(produto);
    },
  },
  computed: {
    ...mapGetters("carrinho", {
      valorTotalProdutos: "getValorTotalProdutos",
      produtos: "getProdutos",
      getQuantidade: "getQuantidade",
      getPreco: "getPreco",
    }),

    quantidade: {
      get() {
        return this.getQuantidade;
      },
      set(valor) {
        return this.setQuantidade(valor);
      },
    },
    preco: {
      get() {
        return this.getPreco;
      },
      set(valor) {
        this.setPreco(valor);
      },
    },
  },
};
</script>
