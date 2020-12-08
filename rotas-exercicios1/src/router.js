import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index'
import User from './pages/User'



Vue.use(Router)



const router = new Router({
    routes: [{ 
        path: '/',
        component: Index,
    }, {
        path: '/user',
        component: User,
    }]
})



export default router