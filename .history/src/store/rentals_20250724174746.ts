import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useRentalsStore = defineStore('rentals', {
    state: (): { rentals: object } => ({
        rentals: [],
    }),
    actions: {
        addMovie(movie: User): void {
            this.rentals.push(movie)
        }
    }
});
