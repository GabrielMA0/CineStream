<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';

const years = []

const filterMoviesTitle = (e: any) => {

  const filterText = e.target.value.toLowerCase();

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
</template>

<style scoped>
</style>
