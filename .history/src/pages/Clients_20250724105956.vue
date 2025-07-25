<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableClients from '../components/organisms/tables/TableClients.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useClientsStore} from '../store/clients';
import {ref} from 'vue';

const clientsStore = useClientsStore();

const optionsValue = [
  'Ativo' ,
  'Inativo' 
];

const filterText = ref('');
</script>

<template>

  <div class="flex justify-between w-full">
    <Title>Clientes</Title>

    <div class="flex gap-4">
      <Input styleField="filter" placeHolder="Nome, CPF"></Input>
      <SelectInput :optionsValue="optionsValue"></SelectInput>
    </div>
    
  </div>

  <TableClients v-show="clientsStore.clients.length > 0"></TableClients>

  <router-link to="/clients/new">
    <Button>Cadastrar cliente</Button>
  </router-link>


</template>

<style scoped>
</style>
