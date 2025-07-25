<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
import {useRentalsStore} from '../../../store/rentals'
import {getDataById} from '../../../utils/register'
import {typeAlert} from '../../atoms/'

import {ref} from 'vue'

const rentalStore = useRentalsStore()
const showAlert = ref(false);
const typeAlert = ref('sucess');
const messageAlert = ref('Usuário criado com sucesso!');

defineProps({
  rentals: Array
})

const teste = (rental: any) => {
  const client = getDataById(rentalStore.rentals,rental.id)
  rentalStore.toggleRentalStatus(client.id)
  typeAlert.value = 'sucess'
  messageAlert.value = 'Status alterado com sucesso!'
  showAlert.value = true;
  setTimeout(() => {
        showAlert.value = false;
    }, 3000);
    return;
}
</script>

<template>
  <Table>
    <Thead>
        <Th>Cliente</Th>
        <Th class="hidden md:table-cell">Filme</Th>
        <Th>Data de Locação</Th>
        <Th>Data de Entrega</Th>
        <Th class="hidden md:table-cell">Usuário</Th>
        <Th>Status</Th>
    </Thead>

    <tbody >
        <tr class="h-[72px]" v-for="rental in rentals" :key="rental.id">
            <Td>{{ rental.name }}</Td>
            <Td class="hidden md:table-cell">{{ rental.movie }}</Td>
            <Td>{{ rental.rentalDate }}</Td>
            <Td>{{ rental.deliveryDate }}</Td>
            <Td class="hidden md:table-cell">{{ rental.user }}</Td>
            <Td>
                <Status @click="teste(rental)" class="hover:bg-[#c57c00] cursor-pointer" :statusType="rental.status">{{ rental.status }}</Status>
            </Td>
        </tr>
        
    </tbody>

  </Table>
</template>

<style scoped>
</style>
