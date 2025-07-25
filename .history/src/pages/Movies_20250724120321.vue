<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';

const filterMovies = (e: any) => {

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
            <Input class="w-full" styleField="filter" placeHolder="Nome, CPF" @input="filterMovies"></Input>
        </div>
</template>

<style scoped>
</style>
