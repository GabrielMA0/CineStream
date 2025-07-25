<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableClients from '../components/organisms/tables/TableClients.vue';
import SelectInput from '../components/atoms/inputs/SelectInput.vue';
import Input from '../components/atoms/inputs/Input.vue';
import {useClientsStore} from '../store/clients';
import { ref } from 'vue';

const clientsStore = useClientsStore();

const optionsValue = [
  'Ativo' ,
  'Inativo' 
];

const clients = ref(clientsStore.clients);

// Função de filtro
const filterClient = (e: any) => {
  const filterText = e.target.value.toLowerCase();

  if(!filterText) return clients.value = clientsStore.clients;

  clients.value = clientsStore.clients.filter(
    client =>
      client.name.toLowerCase().includes(filterText) ||
      client.document.toLowerCase().includes(filterText)
  )

}

const filterStatus = (e: any) => {
  const status = e.target.value;

  console.log(status)

  if(!status) return clients.value = clientsStore.clients;

  clients.value = clientsStore.clients.filter(
    client => client.status.toLowerCase() === status.toLowerCase()
  )
}

</script>

<template>

  <div class="flex justify-between w-full">
    <Title>Clientes</Title>

    <div class="flex gap-4">
      <Input :clients="clients.value" styleField="filter" placeHolder="Nome, CPF" @input="filterClient"></Input>
      <SelectInput :optionsValue="optionsValue" @change="filterStatus"></SelectInput>
    </div>
    
  </div>

  <TableClients :clients="clients" v-show="clients.value"></TableClients>

  <router-link to="/clients/new">
    <Button>Cadastrar cliente</Button>
  </router-link>


</template>

<style scoped>
</style>
