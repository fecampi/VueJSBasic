import Vue from 'vue'

export const baseApiUrl = 'http://localhost:4000'
export const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImZlbGlwZSIsImVtYWlsIjoiZmVsaXBlQGZlbGlwZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA4MzkyNDU4LCJleHAiOjE2MDg2NTE2NTh9.9fdZ7X7aIeiwMWrdhFA5MBW9yCx9eIFdAmDHhZgUmzI';

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError}