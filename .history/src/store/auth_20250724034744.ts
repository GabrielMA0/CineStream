import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { useUserStore } from './user' // ajuste o caminho conforme seu projeto

const userStore = useUserStore();

export const useAuthStore = defineStore('auth', {
    state: (): { user: User } => ({
        user: {},
    }),
    actions: {
        login(values: { user: string, password: string }) {
            const users = userStore.users // supondo que users é um array [{ user, password }]
            if (users && users.length > 0) {
                const found = users.find(u => u.user === values.user && u.password === values.password)
                if (found) {
                    router.push('/users')
                    return
                }
            } else if (values.user === adminAccount.user && values.password === adminAccount.password) {
                router.push('/users')
                return
            }
            showAlert.value = true
            setTimeout(() => { showAlert.value = false }, 3000)
        }
    },
    persist: true
});
