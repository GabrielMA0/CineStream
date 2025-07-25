import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: [],
    }),
    actions: {
        createUser(userData): void {
            this.user.push(userData);
        }
    }
});
