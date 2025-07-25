import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: [],
    }),
    actions: {
        createUser(userData: object): void {
            if (this.checkUserExists(userData)) {
                return false
            } else {
                this.user.push(userData);
                return true;
            }
        },
        checkUserExists(userData: object) {
            return this.user.some((u: any) => u.document === userData.document)
        }
    }
});
