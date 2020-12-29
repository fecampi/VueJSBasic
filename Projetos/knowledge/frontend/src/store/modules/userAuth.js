import axios from 'axios'
export default {

    namespaced: true,
    state: {
        user: null,
     
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
    }
}


//Signin Login 


//Signup Cadastro


//logout sair login


//acessar localstorage 
// localStorage.__knowledge_user


//remover localstorage
// localStorage.removeItem("__knowledge_user");
