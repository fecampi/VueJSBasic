export default {
    namespaced: true,
    state: {
        quantidade: 2,
        preco: 19.99
    },
    getters: {
        //Versão para usar com os métodos
        getQuantidade(state) {
            return state.quantidade
        },
        getPreco(state) {
            return state.preco
        }
    },
    mutations: {
        setQuantidade(state, quantidade) {
            state.quantidade = quantidade
        },
        setPreco(state, preco) {
            state.preco = preco
        }
    },
    
   
}