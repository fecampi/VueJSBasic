export default {
    namespaced: true,

    //Estados
    // import { mapState } from 'vuex'
    // mapState("nameModule",['state1']),
    state: {
        produtos: [],
        quantidade: 2,
        preco: 19.99
    },

    //Getters
    
    getters: {
        getValorTotalProdutos(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
        getProdutos(state) {
            return state.produtos
        },
        getQuantidade(state) {
            return state.quantidade
        },
        getPreco(state) {
            return state.preco
        }
    },

    //setters
    // import {  mapMutations } from "vuex";
    // ...mapMutations("nameModule", ["setQuantidade", "setPreco"]),
    mutations: {
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        },
        setQuantidade(state, quantidade) {
            state.quantidade = quantidade
        },
        setPreco(state, preco) {
            state.preco = preco
        }
    },

    //Regras de Negocio
    // ...mapActions("nameModule", ["action1]),
    actions: {
        adicionarProduto(state, produto) {
            const autoriza = true;
            if (autoriza) {
                state.commit('adicionarProduto', produto)
            }
        }
    }
}