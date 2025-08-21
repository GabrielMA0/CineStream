import { defineStore } from 'pinia';
import type { User, Auth} from '../types/general';
import { useUserStore } from './user';
import type { Router } from 'vue-router'

const adminAccount: User = {
    id: "",
    name: "",
    document: '457.219.030-58',
    password: 'admin',
    status: "ativo",
};

const fakeToken = 'fake-jwt-token-123';

export const useAuthStore = defineStore('auth', {
    state: (): { user: Auth } => ({
        user: {
            id: "",
            name: "",
            document: "",
            password: "",
            status: "ativo",
            token: ""
        }
    }),
    actions: {
        login(values: User): boolean {
            const userStore = useUserStore();
            const users = userStore.user;

            const isValidUser = (user: User) =>
                user.document === values.document &&
                user.password === values.password &&
                user.status !== 'inativo';

            const isAdmin = values.document === adminAccount.document && values.password === adminAccount.password;

            const foundUser = users.find(isValidUser);

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
            this.user = {
                id: "",
                name: "",
                document: "",
                password: "",
                status: "ativo",
                token: ""
            }
            localStorage.removeItem('auth')
            router.push('/login')
        },
        checkLogin(data: User, router: Router) {
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