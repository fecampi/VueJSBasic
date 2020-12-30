import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/pages/Home';
import AdminPages from '@/pages/Admin';
import ArticlesByCategory from '@/pages/Article/articles-by-category';
import ArticleById from '@/pages/Article/ArticleById'
import Auth from '@/pages/Auth'
import LoginPage from '@/pages/Login'



// import { userKey } from '@/global'

Vue.use(Router);
export const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        }, {
            name: 'adminPages',
            path: '/admin',
            component: AdminPages,
        }, {
            name: 'articlesByCategory',
            path: '/categories/:id/articles',
            component: ArticlesByCategory
        },
        {
            name: 'articleById',
            path: '/articles/:id',
            component: ArticleById
        },
        {
            name: 'auth',
            path: '/auth',
            component: Auth
        },
        {
            name: LoginPage,
            path: '/login',
            component: LoginPage
        }

    ]
});

// router.beforeEach((to, from, next) => {
//     const json = localStorage.getItem(userKey)

//     if (to.matched.some(record => record.meta.requiresAdmin)) {
//         const user = JSON.parse(json)
//         user && user.admin ? next() : next({ path: '/' })
//     } else {
//         next()
//     }
// })
