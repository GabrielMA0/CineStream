<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {searchMovies} from '../services/API'
import CardMovie from '../components/atoms/CardMovie.vue';
import { ref } from 'vue';

const movies = ref([]);

const filterMoviesTitle = async (e: any) => {

    const filterText = e.target.value.toLowerCase();
    const result = await searchMovies(filterText);

    console.log(result.Search);

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
        <div class="flex gap-4">
            <Input styleField="filter" placeHolder="Buscar por título" @input="filterMoviesTitle"></Input>
            <Input typeField="number" styleField="filter" placeHolder="Buscar por Ano" @input="filterMoviesYear"></Input>
        </div>

        <div>
            <CardMovie v-for="movie in movies"></CardMovie>
        </div>
</template>

<style scoped>
</style>
