import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useClientsStore = defineStore('clients', {
    state: (): { clients: User[] } => ({
        clients: [],
    }),
    actions: {
        createClient(userData: User): void {
            this.clients.push(userData);
        },
        updateClient(id: string, updatedData: Partial<User>): void {
            const index = this.clients.findIndex(u => u.id === id);
            if (index !== -1) {
                this.clients[index] = { ...this.clients[index], ...updatedData };
            }
        },
        toggleClientStatus(id: string): void {
            const index = this.user.findIndex(u => u.id === id);
            if (index !== -1) {
                if (this.user[index].status === 'desativado') {
                    this.user[index].status = 'ativo'
                } else {
                    this.user[index].status = 'desativado'
                }
            }
        }
    },
    persist: true
});
