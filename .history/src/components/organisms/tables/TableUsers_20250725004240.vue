<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
import { useUserStore } from '../../../store/user';

const users = useUserStore();

</script>

<template>
  <Table v-show="users.user.length > 0" class="w-full">
    <Thead>
        <Th>ID</Th>
        <Th>Nome</Th>
        <Th class="hidden md:block">Documento</Th>
        <Th>Senha</Th>
        <Th>Status</Th>
        <Th>Ações</Th>
    </Thead>

    <tbody>
      <tr class="h-[72px]" v-for="user in users.user" :key="user.id">
        <Td>{{ user.id }}</Td>
        <Td>{{ user.name }}</Td>
        <Td>{{ user.document }}</Td>
        <Td>{{ user.password }}</Td>
        <Td>
            <Status :statusType="user.status">{{ user.status }}</Status>
        </Td>
        <Td>
            <router-link :to="`/users/${user.id}`">
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
