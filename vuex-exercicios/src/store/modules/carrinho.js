export default {
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
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