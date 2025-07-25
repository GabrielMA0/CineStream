<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Tbody from '../../atoms/table/Tbody.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';

const users = [
    {
        id: 1,
        name: 'Sofia Pereira',
        document: '864.124.050-03',
        password: '**********',
        status: 'ativo'
    },
    {
        id: 1,
        name: 'João Santos',
        document: '952.130.230-53',
        password: '*******',
        status: 'inativo'
    }
]
</script>

<template>
  <Table>
    <Thead>
        <Th>ID</Th>
        <Th>Nome</Th>
        <Th>Documento</Th>
        <Th>Senha</Th>
        <Th>Status</Th>
        <Th>Ações</Th>
    </Thead>

    <Tbody v-for="user in users" :key="user.id">
        <Td>{{ user.id }}</Td>
        <Td>{{ user.name }}</Td>
        <Td>{{ user.document }}</Td>
        <Td>{{ user.password }}</Td>
        <Td>
            <Status :statusType="user.status">{{ user.status }}</Status>
        </Td>
        <Td>
          <button class="cursor-pointer hover:text-white">
            Editar
          </button>
        </Td>
    </Tbody>

  </Table>
</template>

<style scoped>
</style>
