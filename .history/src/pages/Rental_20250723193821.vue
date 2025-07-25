<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import FilterInput from '../components/atoms/inputs/FilterInput.vue';
</script>

<template>
  <Title>Locações</Title>

  <TableRental></TableRental>

  <FilterInput placeHolder="Nome, CPF"></FilterInput>

  <Button>Nova Locação</Button>

</template>

<style scoped>
</style>
