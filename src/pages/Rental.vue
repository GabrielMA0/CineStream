<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useRentalsStore} from '../store/rentals'
import {filterStatus, filterClient} from '../utils/filters'
import InputField from '../components/molecules/InputField.vue';
import { ref } from 'vue';

const optionsValue = [
  'Alugado' ,
  'Entregue' 
];

const rentalStore = useRentalsStore()
const rentals = ref([...rentalStore.rentals]);
const rentalDate = ref('')
const deliveryDate = ref('')

const filterText= (e: any) => {
  const filterText = e.target.value.toLowerCase();

  filterClient(filterText, rentals, rentalStore.rentals);
}

const filterSelect = (e: any) => {
  const status = e.target.value;

  filterStatus(status, rentals, rentalStore.rentals)
}

function parseDate(dateStr) {
  if (!dateStr) return null;

  if (dateStr.includes('/')) {

    const [day, month, year] = dateStr.split('/');
    return new Date(+year, +month - 1, +day);
  } else if (dateStr.includes('-')) {

    const [year, month, day] = dateStr.split('-');
    return new Date(+year, +month - 1, +day);
  }
  return null;
}

const filterDate = () => {
  const hasRentalDate = rentalDate.value !== '';
  const hasDeliveryDate = deliveryDate.value !== '';

  const formattedRentalDate = hasRentalDate ? parseDate(rentalDate.value) : null;
  const formattedDeliveryDate = hasDeliveryDate ? parseDate(deliveryDate.value) : null;

  if (!hasRentalDate && !hasDeliveryDate) {
    rentals.value = rentalStore.rentals;
    return;
  }

  rentals.value = rentalStore.rentals.filter((registro) => {
    const registroRental = parseDate(registro.rentalDate);
    const registroDelivery = parseDate(registro.deliveryDate);

    if ((hasRentalDate && !registroRental) || (hasDeliveryDate && !registroDelivery)) {
      return false;
    }

    const isAfterRental = hasRentalDate ? registroRental >= formattedRentalDate : true;
    const isBeforeDelivery = hasDeliveryDate ? registroDelivery <= formattedDeliveryDate : true;

    return isAfterRental && isBeforeDelivery;
  });
};



</script>

<template>
  <div class="flex justify-between gap-2.5 w-full flex-wrap">
    <Title>Locações</Title>

    <div class="flex gap-4 flex-wrap items-end">
      <Input styleField="filter" placeHolder="Buscar por cliente" @input="filterText"></Input>
      <SelectInput :optionsValue="optionsValue" @change="filterSelect" class="size-fit"></SelectInput>
      <div class="flex gap-5 flex-wrap items-end">
        <InputField messageLabel="Filtrar data de locação" v-model="rentalDate" typeField="date" styleField="date" ></InputField>
        <InputField messageLabel="Filtrar data de entrega" v-model="deliveryDate" typeField="date" styleField="date"></InputField>
        <Button @click="filterDate" class="md:size-fit w-full">Filtrar datas</Button>
      </div>
    </div>
    
  </div>
  
  <TableRental :rentals="rentals"></TableRental>

    <router-link to="/rental/new" class="w-full md:size-max">
      <Button>Nova Locação</Button>
    </router-link>


</template>

<style scoped>
</style>
