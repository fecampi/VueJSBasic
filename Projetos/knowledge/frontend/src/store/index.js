import Vue from 'vue'
import Vuex from 'vuex'

import menuStatus from './menuStatus.module';
import userAuth from './userAuth.module';



Vue.use(Vuex)

export default new Vuex.Store({
    modules: { menuStatus, userAuth}
})