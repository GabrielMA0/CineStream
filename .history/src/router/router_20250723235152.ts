// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Users from '../pages/Users.vue'
import Clients from '../pages/Clients.vue'
import Rental from '../pages/Rental.vue'
import RegisterUsers from '../pages/register/RegisterUsers.vue'
import RegisterClients from '../pages/register/RegisterClients.vue'

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
        component: RegisterUsers,
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients,
    },
    {
        path: '/clients/new',
        name: 'RegisterClients',
        component: RegisterClients,
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
