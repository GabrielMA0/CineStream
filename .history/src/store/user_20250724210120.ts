import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', {
    state: (): { user: User[], auth: any } => ({
        user: [],
        auth: useAuthStore()
    }),
    actions: {
        createUser(userData: User): void {
            this.user.push(userData);
        },
        updateUser(id: string, updatedData: Partial<User>): void {
            const index = this.user.findIndex(u => u.id === id);
            if (index !== -1) {
                this.user[index] = { ...this.user[index], ...updatedData };
            }
        },
        toggleUserStatus(id: string): void {
            const index = this.user.findIndex(u => u.id === id);
            if (index !== -1) {
                if (this.user[index].status === 'desativado') {
                    this.user[index].status = 'ativo'
                } else {
                    this.user[index].status = 'desativado'
                }
                auth.checkLogin(this.user[index])
            }
        }
    },
    persist: true
});
