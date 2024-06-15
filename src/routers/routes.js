import {createRouter, createWebHistory} from 'vue-router'
import LoginVue from '../pages/LoginVue.vue'
import AdmProd from '../pages/AdmProd.vue'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import AboutPage from '../pages/AboutPage.vue'

function isAuthenticated() {
    return !!localStorage.getItem('token')
}

export const routers = new createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'login',
        component: LoginVue,
    },
    {
        path: '/manage_products/home',
        name: 'home',
        component: HomePage,
        meta: { requiresAuth: true }
    },
    {
        path: '/manage_products/products',
        name: 'productos',
        component: AdmProd,
        meta: { requiresAuth: true }
    },
    {
        path: '/manage_products/contact',
        name: 'contact',
        component: ContactPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/manage_products/about-us',
        name: 'about-us',
        component: AboutPage,
        meta: { requiresAuth: true }
    },    
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'login' }
    }]
})


routers.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next({name: 'login'})
    } else {
        next()
    }
})