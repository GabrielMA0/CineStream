<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import { checkExistingRegistration } from '../../../utils/register';
import { useMovieStore } from '../../../store/movie';
import ContainerInputs from '../../molecules/ContainerInputs.vue';
import { useClientsStore } from '../../../store/clients';
import {useAuthStore} from '../../../store/auth'
import {useRentalsStore} from '../../../store/rentals'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const movieStore = useMovieStore();
const clientStore = useClientsStore();
const authStore = useAuthStore()
const rentalStore = useRentalsStore()

const movies = movieStore.movies;
const router = useRouter()


const schema = yup.object({
  client: yup.string().required('Campo obrigatório'),
  movie: yup.string().required('Campo é obrigatório'),
  date: yup.date().required('Campo é obrigatório')
  .transform((value, originalValue) => {
      return originalValue === '' ? null : value;
    })
  .test('is-tomorrow-or-later', 'A data deve ser a partir do dia seguinte', value => {
      if (!value) return false;
      const hoje = new Date();
      const amanha = new Date(hoje);
      amanha.setDate(hoje.getDate() + 1);
      amanha.setHours(0, 0, 0, 0);
      return value >= amanha;
    }),
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const showAlert = ref(false);
const typeAlert = ref('sucess');
const inputClient = ref('');
const messageAlert = ref('Filme alugado com sucesso!');
const filterClient = ref(null);
const selectedClient = ref({});
const showModal = ref(false);

const onSubmit = handleSubmit(values => {
    const today: Date = new Date();
    const day: string = String(today.getDate()).padStart(2, '0');
    const month: string = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    const year: number = today.getFullYear();

    const formattedDate: string = `${day}/${month}/${year}`;

    const payload = {
      idClient: selectedClient.value.id,
      client: values.client,
      movie: values.movie,
      rentalDate: formattedDate,
      deliveryDate: values.date,
      user: authStore.user.name,
      status: 'alugado'
    }

    showAlert.value = true;

    // if(checkExistingRegistration(client.clients, clientData)){
    //     typeAlert.value = 'warning';
    //     messageAlert.value = 'Cliente já possui cadastro!';
    // } else {
    //     typeAlert.value = 'sucess';
    //     client.createClient(clientData);

    //     setTimeout(() => {
    //         showAlert.value = false;
    //         router.push('/clients')
    //     }, 3000); 
    // }
});

const searchClient = (): void => {
  filterClient.value = clientStore.clients;

  if(!inputClient.value) return filterClient.value = null;

  filterClient.value = clientStore.clients.filter(
    client => 
      client.name.toLowerCase().includes(inputClient.value) ||
      client.document.toLowerCase().includes(inputClient.value)
  );
}

const selectClient = (client: any): void => {
  showModal.value = false;
  selectedClient.value = client;
  inputClient.value = ''
  filterClient.value = null
}

</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-5">
        <ContainerInputs>
          <div class="relative">
            <InputField
            messageLabel="Cliente"
            placeHolder="Selecione o cliente"
            :isRequired=true
            typeField="text"
            name="client"
            @click="showModal = !showModal;"
            readonly
            :value="selectedClient.name || null"
            />

            <div v-show="showModal" class="absolute bg-[#ffff] w-full p-2.5 rounded-b-[8px] border-1 z-10" >
              <input class="border-1 w-full mb-3 p-2" type="text" @input="searchClient" v-model="inputClient">
              <nav>
                <ul class="flex flex-col gap-2.5">
                  <li v-for="client in filterClient" @click="selectClient(client)" class="hover:text-[#6366F1] cursor-pointer w-full capitalize">{{client.name}}</li>
                </ul>
              </nav>
            </div>
          </div>
            
          <div class="flex gap-5 items-end">
            <InputField
            messageLabel="Filme"
            placeHolder="Selecione o filme"
            :isRequired=true
            typeField="text"
            name="movie"
            :value="movies.Title"
            readonly
            />

            <router-link to="/movies">
              <Button typeBtn="button">Escolher filme</Button>
            </router-link>

          </div>
          
          <InputField
          messageLabel="Data de Entrega"
          placeHolder="DD/MM/AAAA"
          :isRequired="true"
          typeField="date"
          name="date"
          />
        </ContainerInputs>
        
        <Button typeBtn="submit">Cadastrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
