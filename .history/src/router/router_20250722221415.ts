// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Users from '../pages/Users.vue'
import Clients from '../pages/Clients.vue'
import Rental from '../pages/Rental.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients,
    },
    {
        path: '/rental',
        name: 'Rental',
        component: Rental,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
