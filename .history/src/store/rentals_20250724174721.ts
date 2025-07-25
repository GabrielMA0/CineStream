import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useRentalsStore = defineStore('movies', {
    state: (): { movies: object } => ({
        movies: {},
    }),
    actions: {
        addMovie(movie: User): void {
            this.movies = movie;
        }
    }
});
