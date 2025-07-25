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
import { useRoute } from 'vue-router'
import {checkExistingRegistration, getDataById} from '../../../utils/register';

const route = useRoute()
const id = route.params.id as string

const router = useRouter()
const user = useUserStore();
const userEdit = getDataById(user.user, id);    
console.log(userEdit.name);

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
            :userEdit="userEdit.name"
            />
            <InputField
            class="w-[448px]"
            messageLabel="CPF"
            placeHolder="000.000.000-00"
            v-mask="'###.###.###-##'"
            :isRequired="true"
            typeField="text"
            name="document"
            :userEdit="userEdit.document"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Senha"
            placeHolder="Digite sua Senha"
            :isRequired="true"
            typeField="password"
            name="password"
            :userEdit="userEdit.password"
            />
        </div>
        
        <Button typeBtn="submit">Cadastrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
