<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Table from '../../atoms/table/Table.vue';

const clients = [
    {
        id: 1,
        name: 'Sofia Pereira',
        lastName: 'Sofia Pereira',
        document: '864.124.050-03',
        email: 'Sofia Pereira',
        cellPhone: '**********',
        address: 'Sofia Pereira',
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
        <th>Celular</th>
        <th>Endereço</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </Thead>

    <tbody v-for="client in clients" :key="client.id">
      <tr class="h-[72px]">
        <td>{{ client.id }}</td>
        <td>{{ client.name }}</td>
        <td>{{ client.lastName }}</td>
        <td>{{ client.document }}</td>
        <td>{{ client.email }}</td>
        <td>{{ client.cellPhone }}</td>
        <td>{{ client.address }}</td>
        <td>
            <Status>{{ client.status }}</Status>
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
