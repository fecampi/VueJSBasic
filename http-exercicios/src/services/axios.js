import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://heroic-gamma-143021-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
       Vue.prototype.$http = axios
    }
})