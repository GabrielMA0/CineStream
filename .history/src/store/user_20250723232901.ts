import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: [],
    }),
    actions: {
        createUser(userData: object): void {
            this.user.push(userData);
        },
        checkUserExists(userData: object): Boolean {
            return this.user.some((u: any) => u.document === userData.document)
        }
    },
    persist: true
});
