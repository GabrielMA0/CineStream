import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { useUserStore } from './user';
import { useRouter } from 'vue-router'

const adminAccount = {
    document: '457.219.030-58',
    password: 'admin'
};

const fakeToken = 'fake-jwt-token-123';

export const useAuthStore = defineStore('auth', {
    state: (): { user: User | null } => ({
        loggedUser: null,
        router: useRouter()
    }),
    actions: {
        login(values: User): boolean {
            const userStore = useUserStore();
            const users = userStore.user; // ajuste para o nome correto do array

            if (users && users.length > 0) {
                const found = users.find(u => u.document === values.document && u.password === values.password);
                if (found) {
                    found.token = fakeToken;
                    this.loggedUser = found;
                    return true
                }
            } else if (values.document === adminAccount.document && values.password === adminAccount.password) {
                this.loggedUser = { ...adminAccount, token: fakeToken };
                return true;
            }

            return false
        },
        logout() {
            this.user = null
            localStorage.removeItem('auth')
            this.router.push('/login')
        },
        checkLogin(data: object) {
            console.log(data)
            console.log(this.user)
            // const index = this.user.findIndex(u => u.id === user.id);

            // if (index !== -1) {
            //     if (this.user[index].status === 'desativado') {
            //         this.user[index].status = 'ativo'
            //     } else {
            //         this.user[index].status = 'desativado'
            //     }
            // }
        }
    },
    persist: true
});