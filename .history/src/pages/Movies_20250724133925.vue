<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {searchMovies} from '../services/API'
import CardMovie from '../components/atoms/CardMovie.vue';
import { ref } from 'vue';
import Button from '../components/atoms/Button.vue';
import { useMovieStore } from '../store/movie';
import { useRouter } from 'vue-router';

const router = useRouter()
const movieStore = useMovieStore();
const movies = ref([]);

const filterMoviesTitle = async (e: any) => {

    const filterText: string = e.target.value.toLowerCase();
    const result = await searchMovies(filterText);

    movies.value = result.Search || [];
}
const filterMoviesYear = (e: any) => {

  const filterText = e.target.value.toLowerCase();

}

const rentMovie = (movie: any) => {
    movieStore.addMovie(movie);
    alert('Filme adicionado à locação!');
    router.push('/rental/new');
    console.log(movieStore.movies);
}
</script>

<template>
        <Title>Filmes</Title>
        <div class="flex gap-4 flex-wrap">
            <Input styleField="filter" placeHolder="Buscar por título" @input="filterMoviesTitle"></Input>
            <Input typeField="number" styleField="filter" placeHolder="Buscar por Ano" @input="filterMoviesYear"></Input>
        </div>

        <div class="flex gap-5 w-full flex-wrap h-full">
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
