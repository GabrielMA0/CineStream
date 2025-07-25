<script setup lang="ts">
import Button from '../components/atoms/Button.vue';
import Input from '../components/atoms/Input.vue';
</script>

<template>
    <div class="flex flex-col m-[0 auto] items-center h-screen">
        <h1 class="text-[#E2E8F0] text-[30px] font-bold">Bem-vindo ao CineStream</h1>
        <Input messageLabel="Usuário" placeHolder="Digite seu usuário"></Input>
        <Input messageLabel="Senha" placeHolder="Digite sua Senha"></Input>
        <Button>Entrar</Button>
    </div>
   
</template>

<style scoped>
</style>
