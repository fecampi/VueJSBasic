import { userService } from '../_service';

export default {
    namespaced: true,


    state: {
        user: {}

    },


    getters: {
        getUser(state) {
            return state.user
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },

    actions: {
        login(state, { email, password }) {
            const autoriza = true;
            if (autoriza) {
                state.commit('setUser', { email, password })
                userService.login({ email, password })
            }
        }
    }
}