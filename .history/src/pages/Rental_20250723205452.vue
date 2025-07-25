<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';

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
      <Input styleField="filter" placeHolder="Buscar por cliente"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de locação"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de entrega"></Input>
      <SelectInput :optionsValue="optionsValue"></SelectInput>
    </div>
    
  </div>
  
  <TableRental></TableRental>

  <Button>Nova Locação</Button>

</template>

<style scoped>
</style>
