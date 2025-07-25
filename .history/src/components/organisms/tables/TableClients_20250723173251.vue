<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Td from '../../atoms/table/Td.vue';
import Table from '../../atoms/table/Table.vue';

const clients = [
    {
        id: 1,
        name: 'Victor',
        lastName: 'Raul Bruno Brito',
        document: '369.012.161-22',
        email: 'victor.raul.brito@institutodainfancia.com.br',
        cellPhone: '(61) 99173-6671',
        address: '01234-567, Rua das Flores, Jardim Primavera, São Paulo, SP',
        status: 'Ativo'
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Clara Silva',
        document: '123.456.789-00',
        email: 'clara.silva@gmail.com.br',
        cellPhone: '(11) 91234-5678',
        address: '98765-432, Avenida Central, Centro, Rio de Janeiro, RJ',
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
