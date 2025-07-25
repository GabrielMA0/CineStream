<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import {isValidCPF} from '../../../utils/Form/Form';
import { useClientsStore } from '../../../store/clients';
import { checkExistingRegistration } from '../../../utils/register';
import { useMovieStore } from '../../../store/movie';
import ContainerInputs from '../../molecules/ContainerInputs.vue';

const movieStore = useMovieStore();

const movies = movieStore.movies;

console.log(movies)

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'vue-router'

const router = useRouter()
const client = useClientsStore();

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  movie: yup.string().required('Campo é obrigatório'),
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const showAlert = ref(false);

const typeAlert = ref('sucess');
const messageAlert = ref('Cadastro criado com sucesso!');

const onSubmit = handleSubmit(values => {
    const id = uuidv4();
    
    const clientData: object = {
        id,
        name: values.name,
        lastName:values.lastName,
        document: values.document,
        email: values.email || '',
        cellPhone: values.cellPhone || '',
        zipCode: values.zipCode,
        street: values.street,
        neighborhood: values.neighborhood,
        city: values.city,
        state: values.state,
        status: 'ativo',
    };
    
    showAlert.value = true;

    console.log(checkExistingRegistration(client.clients, clientData));
    console.log(client.clients);

    if(checkExistingRegistration(client.clients, clientData)){
        typeAlert.value = 'warning';
        messageAlert.value = 'Cliente já possui cadastro!';
    } else {
        typeAlert.value = 'sucess';
        client.createClient(clientData);

        setTimeout(() => {
            showAlert.value = false;
            router.push('/clients')
        }, 3000); 
    }
    console.log('Form values:', client.clients);
});

</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-5">
        <ContainerInputs>
            <InputField
            class="w-[448px]"
            messageLabel="Cliente"
            placeHolder="Selecione o cliente"
            :isRequired=true
            typeField="text"
            name="client"
            />
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
            name="document"
            />
        </ContainerInputs>
        
        <Button typeBtn="submit">Cadastrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
