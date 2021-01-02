import { userService } from '../_service';
import { router } from '../_helpers';

export default {
    namespaced: true,


    state: {
        user: {},
        loggedIn: false,
    },


    getters: {
        getUser(state) {
            return state.user
        }
    },


    actions: {
        login(state, { email, password }) {
            userService.login({ email, password }).then(
                user => {
                    state.commit('loginSuccess', user);
                    router.push('/');
                },
                error => {
                    state.commit('loginFailure', error);
                    console.log("erro" + error)
                }
            );

        },
        logout(state) {
            userService.logout();
            state.commit('logout')
            router.push({ name: "auth" });
        
        },
    },
    mutations: {
        loginSuccess(state, user) {
            state.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.loggedIn = false;
            state.user = null;
        },
    },

}



