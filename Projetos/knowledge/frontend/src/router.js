import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Home from './pages/Home';
import AdminPages from './pages/Admin';
import ArticlesByCategory from './pages/Article/articles-by-category';
import ArticleById from './pages/Article/ArticleById'



// import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
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


]

const router = new VueRouter({
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     const json = localStorage.getItem(userKey)

//     if (to.matched.some(record => record.meta.requiresAdmin)) {
//         const user = JSON.parse(json)
//         user && user.admin ? next() : next({ path: '/' })
//     } else {
//         next()
//     }
// })

export default router
