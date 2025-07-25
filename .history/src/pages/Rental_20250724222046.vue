<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useRentalsStore} from '../store/rentals'
import {filterStatus, filterClient} from '../utils/filters'

import { ref } from 'vue';

const optionsValue = [
  'Alugado' ,
  'Entregue' 
];

const rentalStore = useRentalsStore()
const rentals = ref(rentalStore.rentals);

const filterText= (e: any) => {
  const filterText = e.target.value.toLowerCase();

  filterClient(filterText,rentals, rentalStore.rentals)
  // if(!filterText) return rentals.value = rentalStore.rentals;

  // rentals.value = rentalStore.rentals.filter(
  //   client => client.client.toLowerCase().includes(filterText)
  // )

}

const filterSelect = (e: any) => {
  const status = e.target.value;

  filterStatus(status, rentals, rentalStore.rentals)

  // if(status === 'Todos') return rentals.value = rentalStore.rentals;

  // rentals.value = rentalStore.rentals.filter(
  //   client => client.status.toLowerCase() === status.toLowerCase()
  // )
}
</script>

<template>
  <div class="flex justify-between gap-2.5 w-full flex-wrap">
    <Title>Locações</Title>

    <div class="flex gap-4 flex-wrap">
      <Input styleField="filter" placeHolder="Buscar por cliente" @input="filterClient"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de locação"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de entrega"></Input>
      <SelectInput :optionsValue="optionsValue" @change="filterSelect"></SelectInput>
    </div>
    
  </div>
  
  <TableRental :rentals="rentals"></TableRental>

    <router-link to="/rental/new" class="size-max">
      <Button>Nova Locação</Button>
    </router-link>


</template>

<style scoped>
</style>
