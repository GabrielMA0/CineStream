import { defineStore } from 'pinia';
import type { Clients} from '../types/general';

export const useClientsStore = defineStore('clients', {
    state: (): { clients: Clients[] } => ({
        clients: [],
    }),
    actions: {
        createClient(userData: Clients): void {
            this.clients.push(userData);
        },
        updateClient(id: string, updatedData: Partial<Clients>): void {
            const index = this.clients.findIndex(u => u.id === id);
            if (index !== -1) {
                this.clients[index] = { ...this.clients[index], ...updatedData };
            }
        }
    },
    persist: true
});
