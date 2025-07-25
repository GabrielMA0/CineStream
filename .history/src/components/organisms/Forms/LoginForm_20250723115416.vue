<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  user: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const onSubmit = handleSubmit(values => {
  console.log('Dados enviados:', values)
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
        />
        <InputField
          class="w-[448px]"
          messageLabel="Senha"
          placeHolder="Digite sua Senha"
          :isRequired="true"
          typeField="password"
        />
        <Button typeBtn="submit">Entrar</Button>
    </form>
</template>

<style scoped>
</style>
