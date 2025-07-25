<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
import {useRentalsStore} from '../../../store/rentals'

const rentalStore = useRentalsStore()

defineProps({
  rentals: Array
})

const teste = () => {
  console.log('foi')
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
                <Status @click="teste" class="hover:bg-[#c57c00] cursor-pointer" :statusType="rental.status">{{ rental.status }}</Status>
            </Td>
        </tr>
        
    </tbody>

  </Table>
</template>

<style scoped>
</style>
