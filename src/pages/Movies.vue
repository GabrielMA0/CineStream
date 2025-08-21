<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {fetchMovies} from '../services/API'
import CardMovie from '../components/atoms/CardMovie.vue';
import Button from '../components/atoms/Button.vue';
import { useMovieStore } from '../store/movie';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const movieStore = useMovieStore();
const movies = ref([]);
const fieldMovie = ref<string>('');
const fieldYear = ref<number>(0);

const searchMovies = async (): Promise<void> => {

    const result = await fetchMovies(fieldMovie.value, fieldYear.value);

    movies.value = result.Search || [];
}

const rentMovie = (movie: any) => {
    movieStore.addMovie(movie);
    alert('Filme adicionado à locação!');
    router.push('/rental/new');
}
</script>

<template>
        <Title>Filmes</Title>
        <div class="flex gap-4 flex-wrap">
            <Input v-model='fieldMovie' styleField="filter" placeHolder="Buscar por título" @input="searchMovies"></Input>
            <Input v-model='fieldYear' typeField="number" styleField="filter" placeHolder="Buscar por Ano" @input="searchMovies"></Input>
        </div>

        <div class="flex gap-5 w-full flex-wrap h-full justify-center">
            <CardMovie v-for="movie in movies" :key="movie.imdbID">
                <img class="w-[176px]" :src="movie.Poster" alt="Poster movie" :title="movie.Title" />
                <span class="text-[#E2E8F0]">{{ movie.Title }}</span>
                <span class="text-[14px] text-[#9499C7]">{{ movie.Year }}</span>
                <Button class="min-w-none" @click="rentMovie(movie)">Alugar</Button>
            </CardMovie>
        </div>
</template>

<style scoped>
</style>
