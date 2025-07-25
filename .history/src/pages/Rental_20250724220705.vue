<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useRentalsStore} from '../store/rentals'
import { ref } from 'vue';

const optionsValue = [
  'Alugado' ,
  'Entregue' 
];

const rentalStore = useRentalsStore()
const rentals = ref(rentalStore.rentals);

const filterClient = (e: any) => {
  const filterText = e.target.value.toLowerCase();

  if(!filterText) return clients.value = rentalStore.rentals;

  clients.value = clientsStore.clients.filter(
    client =>
      client.name.toLowerCase().includes(filterText) ||
      client.document.toLowerCase().includes(filterText)
  )

}
</script>

<template>
  <div class="flex justify-between gap-2.5 w-full flex-wrap">
    <Title>Locações</Title>

    <div class="flex gap-4 flex-wrap">
      <Input styleField="filter" placeHolder="Buscar por cliente" @input="filterClient"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de locação"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de entrega"></Input>
      <SelectInput :optionsValue="optionsValue"></SelectInput>
    </div>
    
  </div>
  
  <TableRental></TableRental>

    <router-link to="/rental/new" class="size-max">
      <Button>Nova Locação</Button>
    </router-link>


</template>

<style scoped>
</style>
