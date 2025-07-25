<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {searchMovies} from '../services/API'
import CardMovie from '../components/atoms/CardMovie.vue';
import { ref } from 'vue';

const movies = ref([]);

const filterMoviesTitle = async (e: any) => {

    const filterText: string = e.target.value.toLowerCase();
    const result = await searchMovies(filterText);

    movies.value = result.Search || [];
    console.log(movies.value);


//   if(!filterText) return clients.value = clientsStore.clients;

//   clients.value = clientsStore.clients.filter(
//     client =>
//       client.name.toLowerCase().includes(filterText) ||
//       client.document.toLowerCase().includes(filterText)
//   )
}
const filterMoviesYear = (e: any) => {

  const filterText = e.target.value.toLowerCase();

//   if(!filterText) return clients.value = clientsStore.clients;

//   clients.value = clientsStore.clients.filter(
//     client =>
//       client.name.toLowerCase().includes(filterText) ||
//       client.document.toLowerCase().includes(filterText)
//   )
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
                <Button class="min-w-none">Alugar</Button>

            </CardMovie>
        </div>
</template>

<style scoped>
</style>
