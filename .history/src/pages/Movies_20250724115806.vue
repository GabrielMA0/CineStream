<script setup lang="ts">
import LoginForm from '../components/organisms/forms/LoginForm.vue';
import Title from '../components/atoms/Title.vue';
import { useAuthStore } from '../store/auth';
import Input from '../components/atoms/inputs/Input.vue';

const auth = useAuthStore();

auth.logout()
</script>

<template>
        <Title>Filmes</Title>
        <div class="flex gap-4">
            <Input :clients="clients.value" styleField="filter" placeHolder="Nome, CPF" @input="filterClient"></Input>
        </div>
        <LoginForm></LoginForm>
</template>

<style scoped>
</style>
