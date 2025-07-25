<script setup lang="ts">
import Link from '../atoms/Link.vue';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter()

</script>

<template>
    <nav class="text-[#E2E8F0] flex gap-[36px]">
        <Link url="/users">Usuários</Link>
        <Link url="/clients">Clientes</Link>
        <Link url="/rental">Locação</Link>
        <Link url="/movies">Movies</Link>
        <Link>
            <button class="flex gap-2.5 cursor-pointer hover:text-white" @click="auth.logout(router)">
                Sair 
                <img class="w-[18px]" src="/leave-icon.svg" alt="Logo" />
            </button>
        </Link>
    </nav>
</template>

<style scoped>
</style>
