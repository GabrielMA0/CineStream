import { defineStore } from 'pinia';
import { User } from '../types/user';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: [],
    }),
    actions: {
        createUser(userData: User[]): void {
            this.user.push(userData);
        },
        checkUserExists(userData: User): boolean {
            return this.user.some((u: any) => u.document === userData.document)
        }
    },
    persist: true
});
