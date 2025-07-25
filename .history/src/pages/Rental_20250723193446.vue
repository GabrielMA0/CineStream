<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableRental from '../components/organisms/tables/TableRental.vue';
import InputField from '../components/molecules/InputField.vue';
</script>

<template>
  <Title>Locações</Title>

  <TableRental></TableRental>

  <Button>Nova Locação</Button>

</template>

<style scoped>
</style>
