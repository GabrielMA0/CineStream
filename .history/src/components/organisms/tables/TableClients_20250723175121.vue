<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';
import Tbody from '../../atoms/table/Tbody.vue';
import Td from '../../atoms/table/Td.vue';
import Th from '../../atoms/table/Th.vue';
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
        <th>ID</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>CPF</th>
        <th>Email</th>
        <th>Celular</th>
        <th>Endereço</th>
        <th>Status</th>
        <th>Ações</th>
    </Thead>

    <Tbody v-for="client in clients" :key="client.id">
        <Td>{{ client.id }}</Td>
        <Td>{{ client.name }}</Td>
        <Td>{{ client.lastName }}</Td>
        <Td>{{ client.document }}</Td>
        <Td>{{ client.email }}</Td>
        <Td>{{ client.cellPhone }}</Td>
        <Td>{{ client.address }}</Td>
        <Td>
            <Status>{{ client.status }}</Status>
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
