<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  user: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório').min(5, 'A senha deve ter pelo menos 5 caracteres'),
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const adminAccount = {
  user: 'admin',
  password: 'admin'
}

const onSubmit = handleSubmit(values => {
  console.log('Dados enviados:', values)
  if(values.user === adminAccount.user && values.password === adminAccount.password) {
    console.log('Login bem-sucedido');
    // Aqui você pode redirecionar o usuário ou realizar outras ações após o login
  } else {
    console.error('Usuário ou senha incorretos');
    // Aqui você pode exibir uma mensagem de erro para o usuário
  }   
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
          name="user"
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
</template>

<style scoped>
</style>
