import Vue from 'vue'
import axios from 'axios'


Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://heroic-gamma-143021-default-rtdb.firebaseio.com/',
        })

    }
})