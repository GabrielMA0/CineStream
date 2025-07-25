<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Status from '../components/atoms/Status.vue';
</script>

<template>
  <Title>Usuários</Title>

  <table class="table-fixed w-full border-[1px] border-[#333866] border-separate border-spacing-0 rounded-[10px]">
    <thead class="bg-[#1A1C33] text-[#E2E8F0] h-[42px]">
      <tr>
        <th>ID</th>
        <th class="text-left">Nome</th>
        <th>Documento</th>
        <th>Senha</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody class="text-[#E2E8F0]">
      <tr>
        <td>1</td>
        <td>Sofia Pereira</td>
        <td>864.124.050-03</td>
        <td>**********</td>
        <td>
          <Status>Ativo</Status>
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
