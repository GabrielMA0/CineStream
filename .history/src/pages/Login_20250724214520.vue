<script setup lang="ts">
import LoginForm from '../components/organisms/forms/LoginForm.vue';
import Title from '../components/atoms/Title.vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
const router = useRouter()

const auth = useAuthStore();

auth.logout(router)
</script>

<template>
        <Title class="text-center">Bem-vindo ao CineStream</Title>
        <LoginForm></LoginForm>
</template>

<style scoped>
</style>
