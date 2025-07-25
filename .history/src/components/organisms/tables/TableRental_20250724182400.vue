<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
import {useRentalsStore} from '../../../store/rentals'

const rentalStore = useRentalsStore()

const rentals = [
    {
        id: 1,
        name: 'Sofia Pereira',
        movie: 'A Jornada',
        rentalDate: '01/05/2024',
        deliveryDate: '08/05/2024',
        user: 'Carlos',
        status: 'alugado'
    }
]
</script>

<template>
  <Table>
    <Thead>
        <Th>Cliente</Th>
        <Th>Filme</Th>
        <Th>Data de Locação</Th>
        <Th>Data de Entrega</Th>
        <Th>Usuário</Th>
        <Th>Status</Th>
    </Thead>

    <tbody >
        <tr class="h-[72px]" v-for="rental in rentalStore.rentals" :key="rental.id">
            <Td>{{ rental.name }}</Td>
            <Td>{{ rental.movie }}</Td>
            <Td>{{ rental.rentalDate }}</Td>
            <Td>{{ rental.deliveryDate }}</Td>
            <Td>{{ rental.user }}</Td>
            <Td>
                <Status :statusType="rental.status">{{ rental.status }}</Status>
            </Td>
        </tr>
        
    </tbody>

  </Table>
</template>

<style scoped>
</style>
