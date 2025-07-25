import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { useUserStore } from './user';
import { useRouter } from 'vue-router';

const adminAccount = {
    document: '457.219.030-58',
    password: 'admin'
};

const fakeToken = 'fake-jwt-token-123';

export const useAuthStore = defineStore('auth', {
    state: (): { user: User | null } => ({
        user: null,
    }),
    actions: {
        login(values: User): void {
            const userStore = useUserStore();
            const router = useRouter();
            const users = userStore.user; // ajuste para o nome correto do array

            console.log(users)

            if (users && users.length > 0) {
                const found = users.find(u => u.document === values.document && u.password === values.password);
                if (found) {
                    found.token = fakeToken;
                    this.user = found;
                    router.push('/users');
                    return;
                }
            } else if (values.document === adminAccount.document && values.password === adminAccount.password) {
                this.user = { ...adminAccount, token: fakeToken };
                router.push('/users');
                return;
            }
        },
        checkLogin(): void {
            const savedUser = localStorage.getItem('auth');
            if (savedUser) {
                this.user = JSON.parse(savedUser);
            }
        }
    },
    persist: true
});