<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  user: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

const { handleSubmit, errors, values } = useForm({
  validationSchema: schema
})

const onSubmit = (e: any) => {
  console.log('Dados enviados:', e)
}

console.log(errors)
</script>

<template>
    <form @submit.prevent="handleSubmit(onSubmit)" class="flex flex-col justify-center items-center gap-5">
        <InputField :errorText='errors.user' :hasError='!!errors.user' :valuesModel='values.user' class="w-[448px]" messageLabel="Usuário" placeHolder="Digite seu usuário"></InputField>
        <InputField :errorText='errors.password' :hasError='!!errors.password' :valuesModel='values.password' class="w-[448px]" messageLabel="Senha" placeHolder="Digite sua Senha"></InputField>
        <Button typeBtn="submit">Entrar</Button>
    </form>
   
</template>

<style scoped>
</style>
