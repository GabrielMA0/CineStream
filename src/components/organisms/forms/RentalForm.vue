<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import CustomSelectModal from '../../molecules/CustomSelectModal.vue';
import { useMovieStore } from '../../../store/movie';
import ContainerInputs from '../../molecules/ContainerInputs.vue';
import { useClientsStore } from '../../../store/clients';
import {useAuthStore} from '../../../store/auth'
import {useRentalsStore} from '../../../store/rentals'
import {formatDate} from '../../../utils/date'
import {fetchMovies} from '../../../services/API'

import type {Rental, Clients, Movie} from '../../../types/general'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid';
import { storeToRefs } from 'pinia'

const movieStore = useMovieStore();
const clientStore = useClientsStore();
const authStore = useAuthStore()
const rentalStore = useRentalsStore()
const router = useRouter()

const showAlert = ref<boolean>(false);
const typeAlert= ref<string>('sucess');
const inputClient = ref<string>('');
const inputMovies= ref<string>('');
const messageAlert = ref<string>('Filme alugado com sucesso!');
const filterClient = ref<Clients[]>(clientStore.clients.filter(client => client.status === 'ativo'));
const selectedClient = ref<Clients>({
   id: "",
    name: "",
    lastName: "",
    document: "",
    email: "",
    cellPhone: "",
    zipCode: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    status: "ativo"
});
const searchedMovies = ref<Movie[]>([])
const showModalClients = ref<boolean>(false);
const showModalMovies = ref<boolean>(false);
const {movie} = storeToRefs(movieStore);

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


const { handleSubmit, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    client: '',
    movie: movie.value?.Title || '',
    date: ''
  }
});


const canRent = (rentals: Rental[], clientId: string): boolean => {
      return !rentals.some(
        (rental) => rental.id === clientId && rental.status === 'alugado'
      );
    };

const onSubmit = handleSubmit(values => {

    const clientCanRent = canRent(rentalStore.rentals, selectedClient.value.id)
    
    if(!clientCanRent) {
      typeAlert.value = 'warning'
      messageAlert.value = 'Cliente já possui filme alugado!'
      showAlert.value = true;
      setTimeout(() => {
            showAlert.value = false;
        }, 3000);
       return;
    } 

    const formattedRentalDate = new Date().toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    const idRental = uuidv4()

    const payload: Rental = {
      idRental,
      id: selectedClient.value.id,
      name: values.client,
      movie: values.movie,
      rentalDate: formattedRentalDate,
      deliveryDate: formatDate(values.date),
      user: authStore.user.name,
      status: 'alugado'
    }

    rentalStore.addRental(payload)

    typeAlert.value = 'sucess'
    messageAlert.value = 'Filme alugado com sucesso!'
    showAlert.value = true;

    setTimeout(() => {
            showAlert.value = false;
            router.push('/rental')
        }, 3000); 
});

const searchClient = (value: string): void => {
  filterClient.value = [...clientStore.clients]

  filterClient.value = clientStore.clients.filter(
    client => 
      client.name.toLowerCase().includes(value) ||
      client.document.toLowerCase().includes(value)
  );
}

const searchMovie = async (value: string): Promise<void> => {

  const result = await fetchMovies(value);

  searchedMovies.value = result.Search || [];
}

const selectClient = (item: Clients): void => {
  selectedClient.value = item;
    showModalClients.value = false;
    setFieldValue('client', `${item.name} ${item.lastName}`)
}

const selectMovie = (item: Movie) => {
  movieStore.addMovie(item);
  showModalMovies.value = false;
  setFieldValue('movie', item.Title ?? '')

  console.log(movie);
}

</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-13">
        <ContainerInputs>
          <div class="relative">
            <InputField
            messageLabel="Cliente"
            placeHolder="Selecione o cliente"
            :isRequired=true
            typeField="text"
            name="client"
            @click="showModalClients = !showModalClients;"
            readonly
            :modelValue="selectedClient.name || ''"
            />

            <CustomSelectModal v-model="inputClient" @select="(c) => selectClient(c as Clients)" v-if="showModalClients" placeholder="ex: Ricardo Santos" @change="searchClient" :items="filterClient" />
          </div>
            
          <div class="relative flex gap-10 md:gap-5 items-end flex-wrap">
            <InputField
            messageLabel="Filme"
            placeHolder="Selecione o filme"
            :isRequired=true
            typeField="text"
            name="movie"
            :modelValue="movie?.Title"
            readonly
            @click="showModalMovies = !showModalMovies;"
            />

            <CustomSelectModal v-model="inputMovies" @select="(m) => selectMovie(m as Movie)" v-if="showModalMovies" placeholder="ex: Avengers" @change="searchMovie" :items="searchedMovies" />

          </div>
          
          <InputField
          messageLabel="Data de Entrega"
          placeHolder="DD/MM/AAAA"
          :isRequired="true"
          typeField="date"
          name="date"
          />
        </ContainerInputs>
        
        <Button typeBtn="submit" class="w-full md:w-auto">Cadastrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
