<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("parametros", ["setQuantidade", "setPreco"]),
  },
  computed: {
    ...mapGetters("parametros", ["getQuantidade", "getPreco"]),
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

