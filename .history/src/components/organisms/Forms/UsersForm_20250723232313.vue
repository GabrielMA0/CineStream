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
    
    const userData = {
        id,
        name: values.name,
        document: values.document,
        password: values.password
    };
    
    if(user.checkUserExists(userData)){
        typeAlert.value = 'warning';
        messageAlert.value = 'Usuário já possui cadastrado!';
    } else {
        typeAlert.value = 'sucess';
        user.createUser(userData);
    }
    
    showAlert.value = true;
    console.log('Form values:', user.user);
    
    // setTimeout(() => {
    //     showAlert.value = false;
    //     router.push('/users')
    // }, 3000); 
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
            messageLabel="CPF"
            placeHolder="000.000.000-00"
            v-mask="'###.###.###-##'"
            :isRequired="true"
            typeField="text"
            name="document"
            />
            <InputField
            class="w-[448px]"
            messageLabel="Senha"
            placeHolder="Digite sua Senha"
            :isRequired="true"
            typeField="password"
            name="password"
            />
        </div>
        
        <Button typeBtn="submit">Entrar</Button>
    </form>

    <Alert v-show="showAlert" :typeAlert="typeAlert"> {{ messageAlert }}</Alert>
</template>

<style scoped>
</style>
