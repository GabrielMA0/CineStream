import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useClientsStore = defineStore('user', {
    state: (): { user: User[] } => ({
        user: [],
    }),
    actions: {
        createUser(userData: User): void {
            this.user.push(userData);
        },
        checkUserExists(userData: User): boolean {
            return this.user.some((u: any) => u.document === userData.document)
        }
    },
    persist: true
});
