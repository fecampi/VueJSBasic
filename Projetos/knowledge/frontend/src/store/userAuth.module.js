import axios from 'axios';
import { router } from '../helpers/router';;
import userService from '../services/user.service';
export default {

    namespaced: true,
    state: {
        user: null,
        status: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            if (user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    },
    actions: {
        login(state,{ email, password }) {

            userService.login(email, password)
                .then(
                    user => {
                        state.status = true;
                        state.user = user;
                        console.log('success')
                        router.push('/');
                    },
                    error => {
                        state.status = {};
                        console.log('error')
                    }
                );
        },

    },


}


//Signin Login 


//Signup Cadastro


//logout sair login


//acessar localstorage 
// localStorage.__knowledge_user


//remover localstorage
// localStorage.removeItem("__knowledge_user");
