import Vue from 'vue';
import Vuex from 'vuex';

import  menuStatus  from './menuStatus';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        menuStatus,
    }
});
