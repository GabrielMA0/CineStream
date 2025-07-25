<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import {isValidCPF} from '../../../utils/Form/Form';
import { v4 as uuidv4 } from 'uuid';
import { useUserStore } from '../../../store/user';
import { useRouter } from 'vue-router'
import type { User } from '../../../types/user';

const router = useRouter()
const user = useUserStore();

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  document: yup.string()
  .required('Campo obrigatório')
  .min(14, 'O documento deve ter pelo menos 14 caracteres')
  .test('is-valid-cpf', 'CPF inválido', value => isValidCPF(value || '')),
  password: yup.string().required('Campo obrigatório').min(5, 'A senha deve ter pelo menos 5 caracteres'),
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const showAlert = ref(false);

const typeAlert = ref('sucess');
const messageAlert = ref('Usuário criado com sucesso!');

const onSubmit = handleSubmit(values => {
    const id = uuidv4();
    
    const userData: User = {
        id,
        name: values.name,
        document: values.document,
        password: values.password,
        status: 'ativo'
    };
    
    showAlert.value = true;

    if(user.checkUserExists(userData)){
        typeAlert.value = 'warning';
        messageAlert.value = 'Usuário já possui cadastro!';
    } else {
        typeAlert.value = 'sucess';
        user.createUser(userData);

        setTimeout(() => {
            showAlert.value = false;
            router.push('/users')
        }, 3000); 
    }
    console.log('Form values:', user.user);
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
            :isRequired="false"
            typeField="text"
            name="cellPhone"
            />
            <InputField
            class="w-[448px]"
            messageLabel="CEP"
            placeHolder="00000-000"
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
            name="email"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Bairro"
            placeHolder="Digite seu Bairro"
            :isRequired="true"
            typeField="text"
            name="email"
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
        
        <Button typeBtn="submit">Entrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
