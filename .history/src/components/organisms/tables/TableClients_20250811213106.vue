<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
import Table from '../../atoms/table/Table.vue';

defineProps({
  clients: Array
})
</script>

<template>
  <Table>
    <Thead>
        <Th>ID</Th>
        <Th>Nome</Th>
        <Th class="hidden md:table-cell">Sobrenome</Th>
        <Th class="hidden md:table-cell">CPF</Th>
        <Th class="hidden md:table-cell">Email</Th>
        <Th class="hidden md:table-cell">Celular</Th>
        <Th class="hidden md:table-cell">Endereço</Th>
        <Th>Status</Th>
        <Th>Ações</Th>
    </Thead>

    <tbody >
      <tr class="h-[72px]" v-for="client in clients" :key="client.id">
        <Td>{{ client.id }}</Td>
        <Td class="capitalize">{{ client.name }}</Td>
        <Td class="hidden md:table-cell capitalize">{{ client.lastName }}</Td>
        <Td class="hidden md:table-cell">{{ client.document }}</Td>
        <Td class="hidden md:table-cell">{{ client.email }}</Td>
        <Td class="hidden md:table-cell">{{ client.cellPhone }}</Td>
        <Td class="hidden md:table-cell">{{ client.street }}</Td>
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
