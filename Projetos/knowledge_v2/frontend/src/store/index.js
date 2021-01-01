import Vue from 'vue';
import Vuex from 'vuex';

import  menuStatus  from './menuStatus';
import account from './account.module';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        menuStatus,
        account
    }
});
