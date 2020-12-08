import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index'
import User from './pages/User'

Vue.use(Router)

export default  new Router({
    mode: 'history',
    routes: [{ 
        path: '/',
        component: Index,
    }, {
        path: '/user/:id',
        component: User,
        props: true,
    }]
})


