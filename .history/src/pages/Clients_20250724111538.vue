<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableClients from '../components/organisms/tables/TableClients.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useClientsStore} from '../store/clients';
import {ref, watch} from 'vue';

const clientsStore = useClientsStore();

const optionsValue = [
  'Ativo' ,
  'Inativo' 
];

// Função de filtro
const filterClient = (e: any) => {
  const filterText = e.target.value.toLowerCase();

  if(!filterText) return clientsStore.clients;

  clientsStore.clients.filter(
    c =>
      c.name.toLowerCase().includes(filterText) ||
      c.document.toLowerCase().includes(filterText)
  )

}

// Reage sempre que filterText mudar
watch(filterText, filterClient)
</script>

<template>

  <div class="flex justify-between w-full">
    <Title>Clientes</Title>

    <div class="flex gap-4">
      <Input styleField="filter" placeHolder="Nome, CPF" @input="filterClient"></Input>
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
