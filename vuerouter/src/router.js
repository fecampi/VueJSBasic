import Vue from 'vue'
import Router from 'vue-router'

import Index from './pages/Index'
import User from './pages/User'


//footer
import FooterUser from './shared/components/template/FooterUser';
import FooterHome from './shared/components/template/FooterHome';




Vue.use(Router)

const router = new Router({
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            if(savedPosition) {
                return savedPosition
            } else if(to.hash) {
                return { selector: to.hash }
            } else {
                return { x: 0, y: 0 }
            }
        },
        routes: [{
            name: Index,
            path: '/',
            components: {
                default: Index,
                footer: FooterHome
            },
            
        }, {
            path: '/user',
            components: {
                default: User,
                footer: FooterUser
            },
            props: true,
            children: [
                {
                    path: '',
                    component: () => import('@/pages/User/components/ShowUsers')
                },
                {
                    path: ':id',
                    component: () => import('@/pages/User/components/ShowUser'),
                    props: true,
                    

                },
                {
                    path: ':id/edit',
                    component: () => import('@/pages/User/components/EditUser'),
                    props: true,
                    name: 'EditUser' 
                },

            ]
        }, {
            path: '/usuario',
            redirect: '/user'
        }, {
            path: '*',
            redirect: '/'
        }]
    })
    
    router.beforeEnter((to, from, next) => {
        console.log('antes das rotas(beforeEnter) -> global')
        next()
    })


    export default router

