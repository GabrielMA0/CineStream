import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useClientsStore = defineStore('clients', {
    state: (): { clients: User[] } => ({
        clients: [],
    }),
    actions: {
        createUser(userData: User): void {
            this.clients.push(userData);
        }
    },
    persist: true
});
