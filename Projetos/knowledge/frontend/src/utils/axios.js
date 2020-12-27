import Vue from 'vue'
import axios from 'axios'

const baseApiUrl = 'http://localhost:4000'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImZlbGlwZSIsImVtYWlsIjoiZmVsaXBlQGZlbGlwZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA4OTk2MzQzLCJleHAiOjE2MDkyNTU1NDN9.1Fw2WIxAQlECbegm9pnf8bm9uE22A9ncRbV5SnD-ZHU';

Vue.use({
    install(Vue) {
        Vue.prototype.$axios = axios.create({
            baseURL: baseApiUrl,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

    }
})

     //Intercetar requisição
        // Vue.prototype.$axios.interceptors.request.use(config => {
        //     // console.log(config.method)
        //     // if(config.method == 'post') {
        //     //     config.method = 'put'
        //     // }
        //     return config
        // }, error => Promise.reject(error))

        //Intercetar resposta
        //Firebase -> incluir o id no array [id, ...]
        // Vue.prototype.$axios.interceptors.response.use(res => {
        //     const array = []
        //     for(let chave in res.data) {
        //         array.push({ id: chave, ...res.data[chave] })
        //     }

        //     res.data = array
        //     return res
        // }, error => Promise.reject(error))