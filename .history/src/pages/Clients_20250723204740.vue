<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableClients from '../components/organisms/tables/TableClients.vue';
</script>

<template>

  <div class="flex justify-between w-full">
  <Title>Clientes</Title>

    <div class="flex gap-4">
      <Input styleField="filter" placeHolder="Nome, CPF"></Input>
      <SelectInput :optionsValue="optionsValue"></SelectInput>
    </div>
    
  </div>

  <TableClients></TableClients>

  <Button>Cadastrar cliente</Button>

</template>

<style scoped>
</style>
