import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'



//footer
import FooterUser from './shared/components/template/FooterUser';
import FooterHome from './shared/components/template/FooterHome';

//User
const User = () => import(/* webpackChunkName: "user" */'./pages/User')
const ShowUsers = () => import(/* webpackChunkName: "user" */'@/pages/User/children/ShowUsers')
const ShowUser = () => import(/* webpackChunkName: "user" */'@/pages/User/children/ShowUser')
const EditUser = () => import(/* webpackChunkName: "user" */'@/pages/User/children/EditUser')



Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            name: 'Home',
            path: '/',
            components: {
                default: Home,
                footer: FooterHome
            },
        },
        {
            path: '/user',
            components: {
                default: User,
                footer: FooterUser
            },
            props: true,
            children: [
                {
                    path: '',
                    component: ShowUsers,
                },
                {
                    path: ':id',
                    component: ShowUser,
                    props: true,
                    //Antes de entrar em uma rota especifica
                    beforeEnter: (to, from, next) => {
                        console.log('antes da rota -> usuário detalhe')
                        next()
                    }
                },
                {
                    path: ':id/edit',
                    component: EditUser,
                    props: true,
                    name: 'EditUser'
                },

            ]
        },
        {
            path: '/usuario',
            redirect: '/user'
        },
        {
            path: '*',
            redirect: '/'
        }]
})


//Antes de entrar em todas
router.beforeEach((to, from, next) => {
    console.log(to.path + " -> " + from.path)
    console.log('antes das rotas -> global')
    next()
})





export default router

