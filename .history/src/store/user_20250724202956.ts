import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useUserStore = defineStore('user', {
    state: (): { user: User[] } => ({
        user: [],
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
        disableUser(id: string, updatedData: Partial<User>): void {
            const index = this.user.findIndex(u => u.id === id);
            if (index !== -1) {
                this.user[index] = { ...this.user[index], ...updatedData };
            }
        }
    },
    persist: true
});
