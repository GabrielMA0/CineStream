import { defineStore } from 'pinia';
import type { User } from '../types/user';
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
            const users = userStore.user; // ajuste para o nome correto do array

            if (users && users.length > 0) {
                const found = users.find(u => u.document === values.document && u.password === values.password);
                if (found) {
                    const userCopy = { ...found, token: fakeToken };
                    this.user = userCopy;
                    return true;
                }
            } else if (values.document === adminAccount.document && values.password === adminAccount.password) {
                this.user = { ...adminAccount, token: fakeToken };
                return true;
            }

            return false
        },
        logout() {
            this.user = null
            localStorage.removeItem('auth')
            const router = useRouter()
            router.push('/login')
        },
        checkLogin(data: object) {
            if (data.id === this.user.id) {
                if (data.status === 'desativado') {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }

        }
    },
    persist: true
});