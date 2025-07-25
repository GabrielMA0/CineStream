<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Tbody from '../../atoms/table/Tbody.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';

const rentals = [
    {
        id: 1,
        name: 'Sofia Pereira',
        movie: '864.124.050-03',
        rentalDate: '**********',
        deliveryDate: '',
        user: 'João Santos',
        status: 'ativo'
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

    <Tbody v-for="rental in rentals" :key="rental.id">
        <Td>{{ rental.name }}</Td>
        <Td>{{ rental.movie }}</Td>
        <Td>{{ rental.rentalDate }}</Td>
        <Td>{{ rental.deliveryDate }}</Td>
        <Td>{{ rental.user }}</Td>
        <Td>
            <Status :statusType="rental.status">{{ rental.status }}</Status>
        </Td>
    </Tbody>

  </Table>
</template>

<style scoped>
</style>
