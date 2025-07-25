<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  user: yup.string().required('Nome é obrigatório'),
  password: yup.string().email('Email inválido').required('Email é obrigatório'),
})

const { handleSubmit, errors, values } = useForm({
  validationSchema: schema
})

const onSubmit = (values: any) => {
  console.log('Dados enviados:', values)
}
</script>

<template>
    <form @submit="onSubmit" class="flex flex-col justify-center items-center h-screen gap-5">
        <InputField valuesModel={{values.user}} class="w-[448px]" messageLabel="Usuário" placeHolder="Digite seu usuário"></InputField>
        <InputField valuesModel={{values.password}} class="w-[448px]" messageLabel="Senha" placeHolder="Digite sua Senha"></InputField>
        <Button typeBtn="submit">Entrar</Button>
    </form>
   
</template>

<style scoped>
</style>
