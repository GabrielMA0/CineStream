import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useMovieStore = defineStore('movies', {
    state: (): { movies: User[] } => ({
        movies: [],
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
        }
    },
    persist: true
});
