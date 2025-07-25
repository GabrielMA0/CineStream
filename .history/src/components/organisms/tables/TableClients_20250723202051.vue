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
        status: 'ativo'
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Clara Silva',
        document: '123.456.789-00',
        email: 'clara.silva@gmail.com.br',
        cellPhone: '(11) 91234-5678',
        address: '98765-432, Avenida Central, Centro, Rio de Janeiro, RJ',
        status: 'inativo'
    }

]
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

    <Tbody >
      <tr class="h-[72px]" v-for="client in clients" :key="client.id">
        <Td>{{ client.id }}</Td>
        <Td>{{ client.name }}</Td>
        <Td>{{ client.lastName }}</Td>
        <Td>{{ client.document }}</Td>
        <Td>{{ client.email }}</Td>
        <Td>{{ client.cellPhone }}</Td>
        <Td>{{ client.address }}</Td>
        <Td>
            <Status :statusType="client.status">{{ client.status }}</Status>
        </Td>
        <Td>
          <button class="cursor-pointer hover:text-white">
            Editar
          </button>
        </Td>
      </tr>
       
    </Tbody>

  </Table>
</template>

<style scoped>
</style>
