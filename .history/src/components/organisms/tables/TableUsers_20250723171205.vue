<script setup lang="ts">
import Status from '../../atoms/Status.vue';
import Thead from '../../atoms/table/Thead.vue';

const users = [
    {
        id: 1,
        name: 'Sofia Pereira',
        document: '864.124.050-03',
        password: '**********',
        status: 'Ativo'
    }
]
</script>

<template>
  <table class="table-fixed w-full border-[1px] text-[#E2E8F0] border-[#333866] border-separate border-spacing-0 rounded-[10px] text-left">
    <Thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Documento</th>
        <th>Senha</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </Thead>

    <tbody v-for="user in users" :key="user.id">
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
    
  </table>
</template>

<style scoped>
</style>
