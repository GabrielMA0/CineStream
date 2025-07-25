<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useRentalsStore} from '../store/rentals'
import {filterStatus, filterClient} from '../utils/filters'
import {formatDate} from '../utils/date'
import InputField from '../components/molecules/InputField.vue';
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
  const hasRentalDate = rentalDate.value !== '';
  const hasDeliveryDate = deliveryDate.value !== '';

  const formattedRentalDate = hasRentalDate ? formatDate(rentalDate.value) : null;
  const formattedDeliveryDate = hasDeliveryDate ? formatDate(deliveryDate.value) : null;

  // Se ambos os campos estiverem vazios, retorna todos os registros
  if (!hasRentalDate && !hasDeliveryDate) {
    rentals.value = rentalStore.rentals;
    return;
  }

  rentals.value = rentalStore.rentals.filter((registro) => {
    const isAfterRental = hasRentalDate ? registro.rentalDate <= formattedRentalDate : true;
    const isBeforeDelivery = hasDeliveryDate ? formattedDeliveryDate >= registro.deliveryDate : true;
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
      <div class="flex gap-2.5 flex-wrap items-end">
        <InputField messageLabel="Filtrar data de locação" v-model="rentalDate" typeField="date" styleField="date" ></InputField>
        <InputField messageLabel="Filtrar data de entrega" v-model="deliveryDate" typeField="date" styleField="date"></InputField>
        <Button @click="filterDate" class="size-fit">Filtrar datas</Button>
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
