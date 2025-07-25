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
            const index = this.clients.findIndex(u => u.id === id);
            if (index !== -1) {
                if (this.clients[index].status === 'desativado') {
                    this.clients[index].status = 'ativo'
                } else {
                    this.clients[index].status = 'desativado'
                }
            }
        }
    },
    persist: true
});
