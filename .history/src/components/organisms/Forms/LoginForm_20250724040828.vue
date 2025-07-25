<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import Alert from '../../atoms/Alert.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../../store/auth';

const router = useRouter()

const auth = useAuthStore();

const schema = yup.object({
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

const onSubmit = handleSubmit(values => {

  const userLogin = {
    user: values.document,
    password: values.password
  }

  auth.login(userLogin);
  
    showAlert.value = true;

    setTimeout(() => {
      showAlert.value = false;
    }, 3000); 

  
});

</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-5">
        <InputField
          class="w-[448px]"
          messageLabel="Usuário"
          placeHolder="Digite seu usuário"
          :isRequired=true
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
        <Button typeBtn="submit">Entrar</Button>
    </form>

    <Alert v-show="showAlert">Usuário ou senha incorretos</Alert>
</template>

<style scoped>
</style>
