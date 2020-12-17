import Vue from 'vue'
import Vuex from 'vuex'

import menuStatus from './modules/menuStatus';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { menuStatus}
})