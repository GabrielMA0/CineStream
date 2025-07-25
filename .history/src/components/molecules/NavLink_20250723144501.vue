<script setup lang="ts">
import Link from '../atoms/Link.vue';
</script>

<template>
    <nav class="text-[#E2E8F0] flex gap-[36px]">
        <Link ref="/users">Usuários</Link>
        <Link ref="/clients">Clientes</Link>
        <Link ref="/rental">Locação</Link>
        <Link>Sair</Link>
    </nav>
</template>

<style scoped>
</style>
