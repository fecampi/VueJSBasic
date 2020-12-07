import Vue from 'vue'
import axios from 'axios'



Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://heroic-gamma-143021-default-rtdb.firebaseio.com/',
            // headers: {
            //     "Authorization": "abc123"
            // }

        })

         //Intercetar requisição
        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method)
            // if(config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error))

        //Intercetar resposta
        //Firebase -> incluir o id no array [id, ...]
        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []
            for(let chave in res.data) {
                array.push({ id: chave, ...res.data[chave] })
            }
          
            res.data = array
            return res
        }, error => Promise.reject(error))
    }
})