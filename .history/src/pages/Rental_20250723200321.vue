<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import FilterInput from '../components/atoms/inputs/FilterInput.vue';
</script>

<template>
  <div class="flex justify-between w-full">
    <Title>Locações</Title>

    <div class="flex gap-4">
      <FilterInput placeHolder="Nome, CPF"></FilterInput>
      <FilterInput :isSelectField="false" placeHolder="Status"></FilterInput>
    </div>
    
  </div>
  
  <TableRental></TableRental>

  <Button>Nova Locação</Button>

</template>

<style scoped>
</style>
