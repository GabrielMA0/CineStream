<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
import Table from '../../atoms/table/Table.vue';
import { useClientsStore } from '../../../store/clients';

const clientData = useClientsStore();

defineProps({
  clients: Array
})

console.log(clients)

</script>

<template>
  <Table>
    <Thead>
        <Th>ID</Th>
        <Th>Nome</Th>
        <Th>Sobrenome</Th>
        <Th>CPF</Th>
        <Th>Email</Th>
        <Th>Celular</Th>
        <Th>Endereço</Th>
        <Th>Status</Th>
        <Th>Ações</Th>
    </Thead>

    <tbody >
      <tr class="h-[72px]" v-for="client in clients" :key="client.id">
        <Td>{{ client.id }}</Td>
        <Td>{{ client.name }}</Td>
        <Td>{{ client.lastName }}</Td>
        <Td>{{ client.document }}</Td>
        <Td>{{ client.email }}</Td>
        <Td>{{ client.cellPhone }}</Td>
        <Td>{{ client.street }}</Td>
        <Td>
            <Status :statusType="client.status">{{ client.status }}</Status>
        </Td>
        <Td>
          <router-link :to="`/clients/${client.id}`">
            <button class="cursor-pointer hover:text-white">
              Editar
            </button>
          </router-link>
        </Td>
      </tr>
    </tbody>

  </Table>
</template>

<style scoped>
</style>
