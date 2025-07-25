<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  user: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

const { handleSubmit, errors, values, meta } = useForm({
  validationSchema: schema
})

const onSubmit = (e: any) => {
  console.log('Dados enviados:', e)
}
</script>

<template>
    <form @submit.prevent="handleSubmit(onSubmit)" class="flex flex-col justify-center items-center gap-5">
        <InputField
          :errorText="errors.user"
          :hasError="meta.user && !!errors.user"
          v-model="values.user"
          class="w-[448px]"
          messageLabel="Usuário"
          placeHolder="Digite seu usuário"
        />
        <InputField
          :errorText="errors.password"
          :hasError="meta.password && !!errors.password"
          v-model="values.password"
          class="w-[448px]"
          messageLabel="Senha"
          placeHolder="Digite sua Senha"
        />
        <Button typeBtn="submit">Entrar</Button>
    </form>
</template>

<style scoped>
</style>
