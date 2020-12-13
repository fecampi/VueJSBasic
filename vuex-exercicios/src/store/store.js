import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import state from './global/state';
import * as getters from './global/getters';

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    modules: { carrinho, parametros }
})