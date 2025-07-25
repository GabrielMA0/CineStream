import { defineStore } from 'pinia';
import type { User } from '../types/general';
import { useUserStore } from './user';

const adminAccount = {
    document: '457.219.030-58',
    password: 'admin'
};

const fakeToken = 'fake-jwt-token-123';

export const useAuthStore = defineStore('auth', {
    state: (): { user: User | null } => ({
        user: null
    }),
    actions: {
        login(values: User): boolean {
            const userStore = useUserStore();
            const users = userStore.user;

            const isValidUser = (user: any) =>
                user.document === values.document &&
                user.password === values.password &&
                user.status !== 'inativo';

            const isAdmin = values.document === adminAccount.document && values.password === adminAccount.password;

            const foundUser = users?.find(isValidUser);

            if (foundUser) {
                this.user = { ...foundUser, token: fakeToken };
                return true;
            }

            if (isAdmin) {
                this.user = { ...adminAccount, token: fakeToken };
                return true;
            }

            return false;

        },
        logout(router: Router) {
            this.user = null
            localStorage.removeItem('auth')
            router.push('/login')
        },
        checkLogin(data: object, router: Router) {
            if (data.id === this.user.id) {
                if (data.status === 'inativo') {
                    this.logout(router)
                }
            }
            router.push('/users');
        }
    },
    persist: true
});