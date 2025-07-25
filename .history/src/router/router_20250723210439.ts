// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Users from '../pages/Users.vue'
import Clients from '../pages/Clients.vue'
import Rental from '../pages/Rental.vue'

const routes = [
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
        path: '/users/new',
        name: 'RegisterUsers',
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
