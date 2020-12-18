import Vue from 'vue'
import Vuex from 'vuex'

import menuStatus from './modules/menuStatus';
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({

    modules: { menuStatus, user}
})