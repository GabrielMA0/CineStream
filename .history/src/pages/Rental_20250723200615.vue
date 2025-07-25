<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import FilterInput from '../components/atoms/inputs/FilterInput.vue';

const optionsValue = [
 'Ativo' ,
  'Inativo' ,
  'Pendente' 
];
</script>

<template>
  <div class="flex justify-between w-full">
    <Title>Locações</Title>

    <div class="flex gap-4">
      <FilterInput placeHolder="Nome, CPF"></FilterInput>
      <FilterInput :optionsValue="optionsValue" :isSelectField="true" placeHolder="Status"></FilterInput>
      <select name="select" class="outline-none border-none p-[16px] w-full bg-[#242647] text-[#E2E8F0] rounded-[8px] max-w-[448px] ">
        <option selected>Todos</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Ativo">Ativo</option>
      </select>

    </div>
    
  </div>
  
  <TableRental></TableRental>

  <Button>Nova Locação</Button>

</template>

<style scoped>
</style>
