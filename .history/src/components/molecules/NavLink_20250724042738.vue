<script setup lang="ts">
import Link from '../atoms/Link.vue';
</script>

<template>
    <nav class="text-[#E2E8F0] flex gap-[36px]">
        <Link url="/users">Usuários</Link>
        <Link url="/clients">Clientes</Link>
        <Link url="/rental">Locação</Link>
        <Link class="flex cursor-pointer">
            <button>
                Sair 
                <img class="w-[18px]" src="/leave-icon.svg" alt="Logo" />
            </button>
        </Link>
    </nav>
</template>

<style scoped>
</style>
