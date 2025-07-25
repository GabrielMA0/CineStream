<script setup lang="ts">
import Link from '../atoms/Link.vue';
</script>

<template>
    <nav class="text-[#E2E8F0] flex gap-[36px]">
        <Link link="/users">Usuários</Link>
        <Link link="/clients">Clientes</Link>
        <Link link="/rental">Locação</Link>
        <Link>Sair</Link>
    </nav>
</template>

<style scoped>
</style>
