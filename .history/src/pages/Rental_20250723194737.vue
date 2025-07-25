<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import FilterInput from '../components/atoms/inputs/FilterInput.vue';
</script>

<template>
  <div>
<Title>Locações</Title>

  <FilterInput placeHolder="Nome, CPF"></FilterInput>
  </div>
  

  <TableRental></TableRental>

  <Button>Nova Locação</Button>

</template>

<style scoped>
</style>
