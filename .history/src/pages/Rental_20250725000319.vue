<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useRentalsStore} from '../store/rentals'
import {filterStatus, filterClient} from '../utils/filters'
import {formatDate} from '../utils/date'

import { ref } from 'vue';

const optionsValue = [
  'Alugado' ,
  'Entregue' 
];

const rentalStore = useRentalsStore()
const rentals = ref(rentalStore.rentals);
const rentalDate = ref('')
const deliveryDate = ref('')

const filterText= (e: any) => {
  const filterText = e.target.value.toLowerCase();

  filterClient(filterText,rentals, rentalStore.rentals)

}

const filterSelect = (e: any) => {
  const status = e.target.value;

  filterStatus(status, rentals, rentalStore.rentals)
}

const filterDate = () => {
  // const formattedDate = formatDate(e.target.value)

  console.log("rentalDate", rentalDate.value)
  console.log("deliveryDate", deliveryDate.value)

  rentals.value = rentalStore.rentals.filter((registro) => {
    return registro.rentalDate >= formatDate(rentalDate.value) && formatDate(deliveryDate.value) <= registro.deliveryDate;
  });
}
</script>

<template>
  <div class="flex justify-between gap-2.5 w-full flex-wrap">
    <Title>Locações</Title>

    <div class="flex gap-4 flex-wrap">
      <Input styleField="filter" placeHolder="Buscar por cliente" @input="filterText"></Input>
      <SelectInput :optionsValue="optionsValue" @change="filterSelect"></SelectInput>
      <div class="flex gap-2.5 flex-wrap">
        <Input v-model="rentalDate" typeField="date" styleField="date" placeHolder="Filtrar data de locação"></Input>
        <Input v-model="deliveryDate" typeField="date" styleField="date" placeHolder="Filtrar data de entrega"></Input>
        <Button @click="filterDate">Filtrar datas</Button>
      </div>
    </div>
    
  </div>
  
  <TableRental :rentals="rentals"></TableRental>

    <router-link to="/rental/new" class="size-max">
      <Button>Nova Locação</Button>
    </router-link>


</template>

<style scoped>
</style>
