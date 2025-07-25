<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
import { useForm, useField} from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  user: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

useForm({
  validationSchema: schema
});

const { value: user, errorMessage: userError, meta: userMeta } = useField('user');
const { value: password, errorMessage: passwordError, meta: passwordMeta } = useField('password');

const onSubmit = (e: any) :void => {
  console.log('Dados enviados:', e)
  console.log('Usuário', user.value)
  console.log('Senha:', password.value)
  console.log('erroUsuário:', !!userError)
  console.log('erroSenha:', passwordMeta)
}
</script>

<template>
    <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center gap-5">
        <InputField
          :errorText="userError"
          :hasError="userMeta.touched  && !!userError"
          v-model="user"
          class="w-[448px]"
          messageLabel="Usuário"
          placeHolder="Digite seu usuário"
        />
        <InputField
          :errorText="passwordError"
          :hasError="passwordMeta.touched  && !!passwordError"
          v-model="password"
          class="w-[448px]"
          messageLabel="Senha"
          placeHolder="Digite sua Senha"
        />
        <Button typeBtn="submit">Entrar</Button>
    </form>
</template>

<style scoped>
</style>
