<script setup lang="ts">
import Button from '../components/atoms/Button.vue';
import Input from '../components/atoms/Input.vue';
</script>

<template>
    <main class="flex flex-col justify-center items-center h-screen gap-5">
        <h1 class="text-[#E2E8F0] text-[30px] font-bold">Bem-vindo ao CineStream</h1>
        <Input class="w-[448px]" messageLabel="Usuário" placeHolder="Digite seu usuário"></Input>
        <Input class="w-[448px]" messageLabel="Senha" placeHolder="Digite sua Senha"></Input>
        <Button>Entrar</Button>
    </main>
   
</template>

<style scoped>
</style>
