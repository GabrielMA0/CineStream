<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';

const clients = [
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
  <Table>
    <Thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>CPF</th>
        <th>Email</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </Thead>

    <tbody v-for="user in clients" :key="user.id">
      <tr class="h-[72px]">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.document }}</td>
        <td>{{ user.password }}</td>
        <td>
            <Status>{{ user.status }}</Status>
        </td>
        <td>
          <button class="cursor-pointer hover:text-white">
            Editar
          </button>
        </td>
      </tr>
    </tbody>

  </Table>
</template>

<style scoped>
</style>
