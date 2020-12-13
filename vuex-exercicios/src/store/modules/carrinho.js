export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
        //Versão para usar com os métodos
        produtos(state){
            return state.produtos
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        adicionarProduto( state , payload) {
        const autoriza = true;
        if (autoriza){
            state.commit('adicionarProduto', payload)
        }
               
  
        }
    }
}