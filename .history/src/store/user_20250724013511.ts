import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useUserStore = defineStore('user', {
    state: (): { user: User[] } => ({
        user: [],
    }),
    actions: {
        createUser(userData: User): void {
            this.user.push(userData);
        }
    },
    persist: true
});
