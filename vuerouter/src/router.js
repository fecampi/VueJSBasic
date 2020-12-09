import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index'
import User from './pages/User'



Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Index,
    }, {
        path: '/user',
        component: User,
        props: true,
        children: [
            {
                path: '',
                component: () => import('./pages/User/components/ShowUsers')
            },
            {
                path: ':id',
                component: () => import('./pages/User/components/ShowUser'),
                props: true,
            },
            {
                path: ':id/edit',
                component: () => import('./pages/User/components/EditUser'),
                props: true,
            },

        ]
    }]
})


