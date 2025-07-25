<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import isValidCPF from '../../../utils/Form/Form';

const router = useRouter()

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  document: yup.string()
  .required('Campo obrigatório')
  .min(5, 'A senha deve ter pelo menos 5 caracteres')
  .test('is-valid-cpf', 'CPF inválido', value => isValidCPF(value || '')),
  password: yup.string().required('Campo obrigatório').min(5, 'A senha deve ter pelo menos 5 caracteres'),
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const adminAccount = {
  user: 'admin',
  password: 'admin'
}

const showAlert = ref(false);

const onSubmit = handleSubmit(values => {
  if(values.user === adminAccount.user && values.password === adminAccount.password) {
     router.push('/users')

  } else {
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 3000); 

  }   
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

    <Alert v-show="showAlert">Usuário ou senha incorretos</Alert>
</template>

<style scoped>
</style>
