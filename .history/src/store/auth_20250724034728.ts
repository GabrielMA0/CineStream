import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { useUserStore } from './user' // ajuste o caminho conforme seu projeto

const userStore = useUserStore();

export const useAuthStore = defineStore('auth', {
    state: (): { user: User } => ({
        user: {},
    }),
    actions: {
        login(userData: User): void {
            this.user.push(userData);
        }
    },
    persist: true
});
