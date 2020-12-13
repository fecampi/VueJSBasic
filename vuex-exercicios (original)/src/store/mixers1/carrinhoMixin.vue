<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    ...mapGetters("carrinho", { total: "valorTotal", produtos: "produtos" }),
  },
  methods: {
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
};
</script>
