import { defineStore } from 'pinia';
import type { User } from '../types/user';

export const useMovieStore = defineStore('movies', {
    state: (): { movies: User[] } => ({
        movies: [],
    }),
    actions: {
        addMovie(movie: User): void {
            this.movies.push(movie);
        }
    }
});
