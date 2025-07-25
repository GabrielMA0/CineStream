<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import {isValidCPF} from '../../../utils/Form/Form';
import { useUserStore } from '../../../store/user';
import type { User } from '../../../types/user';
import ContainerInputs from '../../molecules/ContainerInputs.vue';
import {checkExistingRegistration, getDataById, checkExistingRegistrationEdit} from '../../../utils/register';
import {useAuthStore} from '../../../store/auth'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string

const router = useRouter()
const user = useUserStore();
const authStore = useAuthStore()
const userEdit = getDataById(user.user, id) || '';    

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

    if(checkExistingRegistration(user.user, userData)){
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
});

const onUpdate = handleSubmit(values => {
    if (checkExistingRegistrationEdit(user.user, { document: values.document, id })) {
        typeAlert.value = 'warning';
        messageAlert.value = 'Já existe um usuário com esse CPF!';
        showAlert.value = true;
        return;
    }

    user.updateUser(id, {
        name: values.name,
        document: values.document,
        password: values.password
    });
    typeAlert.value = 'sucess';
    messageAlert.value = 'Usuário atualizado com sucesso!';
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false;
        router.push('/users');
    }, 3000);
});

const changeUserStatus = () :void => {
    user.toggleUserStatus(userEdit.id)
    typeAlert.value = 'sucess';
    messageAlert.value = 'Status atualizado com sucesso!';
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false;
        authStore.checkLogin(userEdit, router)
    }, 3000);
}

</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-13">
        <ContainerInputs>
            <InputField
            class="md:w-[448px]"
            messageLabel="Nome"
            placeHolder="Digite seu nome"
            :isRequired=true
            typeField="text"
            name="name"
            :value="userEdit.name"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="CPF"
            placeHolder="000.000.000-00"
            v-mask="'###.###.###-##'"
            :isRequired="true"
            typeField="text"
            name="document"
            :value="userEdit.document"
            />
            <InputField
            class="md:w-[448px]"
            messageLabel="Senha"
            placeHolder="Digite sua Senha"
            :isRequired="true"
            typeField="password"
            name="password"
            :value="userEdit.password"
            />
        </ContainerInputs>
        
        <div class="flex gap-5 flex-wrap justify-center w-full">
            <Button v-if="userEdit" typeBtn="button" @click="onUpdate">Salvar</Button>
            <Button v-else typeBtn="submit">Cadastrar</Button>
            <Button v-show="userEdit" typeBtn="button" @click="changeUserStatus">Ativar/Desativar</Button>
        </div>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
