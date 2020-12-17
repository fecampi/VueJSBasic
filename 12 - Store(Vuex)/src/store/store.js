import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho';


import state from './state';
import * as getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    modules: { carrinho}
})