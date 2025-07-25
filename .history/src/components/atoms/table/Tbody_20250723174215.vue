<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';

const users = [
    {
        id: 1,
        name: 'Sofia Pereira',
        document: '864.124.050-03',
        password: '**********',
        status: 'Ativo'
    },
    {
        id: 1,
        name: 'João Santos',
        document: '952.130.230-53',
        password: '*******',
        status: 'Ativo'
    }
]
</script>

<template>
    <tbody v-for="user in users" :key="user.id">
      <tr class="h-[72px]">
        <slot></slot>
      </tr>
    </tbody>
</template>

<style scoped>
</style>
