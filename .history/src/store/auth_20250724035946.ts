import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { useUserStore } from './user' // ajuste o caminho conforme seu projeto
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore();

const adminAccount = {
    document: '457.219.030-58',
    password: 'admin'
}

const fakeToken = 'fake-jwt-token-123'

export const useAuthStore = defineStore('auth', {
    state: (): { user: User } => ({
        user: {},
    }),
    actions: {
        login(values: User): void {
            const users = userStore.user // supondo que users é um array [{ user, password }]
            if (users && users.length > 0) {
                const found = users.find(u => u.document === values.document && u.password === values.password)
                if (found) {
                    found.token = fakeToken
                    this.user = found
                    router.push('/users')
                    return
                }
            } else if (values.document === adminAccount.document && values.password === adminAccount.password) {
                router.push('/users')
                return
            }
        },
        checkLogin(): void {
            const savedUser = localStorage.getItem('auth')

            if (savedUser) {
                token.value = savedToken
                user.value = JSON.parse(savedUser)
            }
        }
    },
    persist: true
});
