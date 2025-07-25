<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';

const optionsValue = [
  'Alugado' ,
  'Entregue' 
];
</script>

<template>
  <div class="flex justify-between gap-2.5 w-full flex-wrap">
    <Title>Locações</Title>

    <div class="flex gap-4 flex-wrap">
      <Input styleField="filter" placeHolder="Buscar por cliente"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de locação"></Input>
      <Input typeField="date" styleField="date" placeHolder="Filtrar data de entrega"></Input>
      <SelectInput :optionsValue="optionsValue"></SelectInput>
    </div>
    
  </div>
  
  <TableRental></TableRental>

    <router-link to="/rental/new" class="size-max">
      <Button>Nova Locação</Button>
    </router-link>


</template>

<style scoped>
</style>
