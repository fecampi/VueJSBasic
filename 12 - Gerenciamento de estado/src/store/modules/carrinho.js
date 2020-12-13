export default {
    namespaced: true,

    //Estados
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
    actions: {
        adicionarProduto(state, produto) {
            const autoriza = true;
            if (autoriza) {
                state.commit('adicionarProduto', produto)
            }
        }
    }
}