import { defineStore } from 'pinia';
import type { User } from '../types/general';

export const useMovieStore = defineStore('movies', {
    state: (): { movies: object } => ({
        movies: {},
    }),
    actions: {
        addMovie(movie: User): void {
            this.movies = movie;
        }
    }
});
