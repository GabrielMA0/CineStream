<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import {isValidCPF} from '../../../utils/Form/Form';
import { useClientsStore } from '../../../store/clients';
import { checkExistingRegistration, getDataById } from '../../../utils/register';

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const id = route.params.id as string
const client = useClientsStore();
const clientEdit = getDataById(user.user, id) || '';    


const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  lastName: yup.string()
    .required('Sobrenome é obrigatório'),
  document: yup.string()
  .required('Campo obrigatório')
  .min(14, 'O documento deve ter pelo menos 14 caracteres')
  .test('is-valid-cpf', 'CPF inválido', value => isValidCPF(value || '')),
  email: yup.string()
    .email('Email inválido')
    .nullable(),
  cellPhone: yup.string()
    .matches(/^\(\d{2}\)\s?\d{5}-\d{4}$/, 'Celular inválido')
    .nullable(),
  zipCode: yup.string()
    .required('CEP é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  street: yup.string()
    .required('Logradouro é obrigatório'),
  neighborhood: yup.string()
    .required('Bairro é obrigatório'),
  city: yup.string()
    .required('Cidade é obrigatória'),
  state: yup.string()
    .required('Estado é obrigatório')
    .length(2, 'Informe a sigla do estado (UF)'),
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
        <div class="grid grid-cols-2 gap-5">
            <InputField
            class="w-[448px]"
            messageLabel="Nome"
            placeHolder="Digite seu nome"
            :isRequired=true
            typeField="text"
            name="name"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Sobrenome"
            placeHolder="Digite seu Sobrenome"
            :isRequired=true
            typeField="text"
            name="lastName"
            />
            <InputField
            class="w-[448px]"
            messageLabel="CPF"
            placeHolder="000.000.000-00"
            v-mask="'###.###.###-##'"
            :isRequired="true"
            typeField="text"
            name="document"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Email"
            placeHolder="email@example.com"
            :isRequired="false"
            typeField="email"
            name="email"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Celular"
            placeHolder="(00)  00000-0000"
            v-mask="'(##) #####-####'"
            :isRequired="false"
            typeField="text"
            name="cellPhone"
            />
            <InputField
            class="w-[448px]"
            messageLabel="CEP"
            placeHolder="00000-000"
            v-mask="'#####-###'"
            :isRequired="true"
            typeField="text"
            name="zipCode"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Logradouro"
            placeHolder="Rua,  Avenida, etc."
            :isRequired="true"
            typeField="text"
            name="street"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Bairro"
            placeHolder="Digite seu Bairro"
            :isRequired="true"
            typeField="text"
            name="neighborhood"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Cidade"
            placeHolder="Digite sua Cidade"
            :isRequired="true"
            typeField="text"
            name="city"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Estado"
            placeHolder="UF"
            :isRequired="true"
            typeField="text"
            name="state"
            />
        </div>
        
        <Button typeBtn="submit">Cadastrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
