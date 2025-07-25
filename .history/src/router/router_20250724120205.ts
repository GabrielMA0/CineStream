// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Users from '../pages/Users.vue'
import Clients from '../pages/Clients.vue'
import Rental from '../pages/Rental.vue'
import Movies from '../pages/Movies.vue'
import RegisterUsers from '../pages/register/RegisterUsers.vue'
import RegisterClients from '../pages/register/RegisterClients.vue'
import RegisterRental from '../pages/register/RegisterRental.vue'
import EditUser from '../pages/edit/EditUser.vue'
import EditClient from '../pages/edit/EditClient.vue'
import { useAuthStore } from '../store/auth'

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
        meta: { requiresAuth: true }
    },
    {
        path: '/users/new',
        name: 'RegisterUsers',
        component: RegisterUsers,
        meta: { requiresAuth: true }
    },
    {
        path: '/users/:id',
        name: 'EditUser',
        component: EditUser,
        props: true,
        meta: { requiresAuth: true }
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients,
        meta: { requiresAuth: true }
    },
    {
        path: '/clients/new',
        name: 'RegisterClients',
        component: RegisterClients,
        meta: { requiresAuth: true }
    },
    {
        path: '/clients/:id',
        name: 'EditClient',
        component: EditClient,
        props: true,
        meta: { requiresAuth: true }
    },
    {
        path: '/rental',
        name: 'Rental',
        component: Rental,
        meta: { requiresAuth: true }
    },
    {
        path: '/rental/new',
        name: 'RegisterRental',
        component: RegisterRental,
        meta: { requiresAuth: true }
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    if (to.meta.requiresAuth && !auth.user) {
        next('/login')
    } else {
        next()
    }
})

export default router
