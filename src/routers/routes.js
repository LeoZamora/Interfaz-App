import {createRouter, createWebHistory} from 'vue-router'
import LoginVue from '../components/LoginVue.vue'
import HelloWorld from '../components/HelloWorld.vue'

export const routers = new createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'app',
        component: LoginVue
    },
    {
        path: '/login',
        name: 'login',
        component: LoginVue
    },
    {
        path: '/helloworld',
        name: 'hello',
        component: HelloWorld
    }
]
})