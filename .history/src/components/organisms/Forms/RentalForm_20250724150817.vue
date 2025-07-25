<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import { checkExistingRegistration } from '../../../utils/register';
import { useMovieStore } from '../../../store/movie';
import ContainerInputs from '../../molecules/ContainerInputs.vue';

const movieStore = useMovieStore();

const movies = movieStore.movies;

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'vue-router'

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
const messageAlert = ref('Filme alugado com sucesso!');

const onSubmit = handleSubmit(values => {
    // const id = uuidv4();
    
    // const clientData: object = {
    //     id,
    //     name: values.name,
    //     lastName:values.lastName,
    //     document: values.document,
    //     email: values.email || '',
    //     cellPhone: values.cellPhone || '',
    //     zipCode: values.zipCode,
    //     street: values.street,
    //     neighborhood: values.neighborhood,
    //     city: values.city,
    //     state: values.state,
    //     status: 'ativo',
    // };
    
    // showAlert.value = true;

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

</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-5">
        <ContainerInputs>
          <div class="relative">
            <InputField
            class="w-[448px]"
            messageLabel="Cliente"
            placeHolder="Selecione o cliente"
            :isRequired=true
            typeField="text"
            name="client"
            />

            <div class="absolute bg-[#ffff] w-full p-2.5 rounded-b-[8px] border-1 z-10">
              <nav>
                <ul>
                  <li class="hover:text-[#6366F1] cursor-pointer w-full">teste</li>
                  <li class="hover:text-[#6366F1] cursor-pointer w-full">teste</li>
                </ul>
              </nav>
            </div>
          </div>
            
          <div class="flex gap-5 items-end">
            <InputField
            class="w-[448px]"
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
          class="w-[448px]"
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
