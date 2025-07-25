import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: [],
    }),
    actions: {
        createUser(userData) {
            this.user = userData.user;
            this.token = userData.token;
        },
        logout() {
            this.user = null;
            this.token = null;
        }
    }
});
