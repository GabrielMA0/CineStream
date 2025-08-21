import { defineStore } from 'pinia';
import type { Movie } from '../types/general';

export const useMovieStore = defineStore('movie', {
    state: (): { movie: Movie | null} => ({
        movie: null,
    }),
    actions: {
        addMovie(item: Movie): void {
            this.movie = item;
        }
    }
});
