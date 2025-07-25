<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import InputField from '../../molecules/InputField.vue';
</script>

<template>
    <form class="flex flex-col justify-center items-center h-screen gap-5">
        <InputField class="w-[448px]" messageLabel="Usuário" placeHolder="Digite seu usuário"></InputField>
        <InputField class="w-[448px]" messageLabel="Senha" placeHolder="Digite sua Senha"></InputField>
        <Button type="submit">Entrar</Button>
    </form>
   
</template>

<style scoped>
</style>
