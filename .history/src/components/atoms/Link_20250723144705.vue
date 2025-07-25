<script setup lang="ts">
defineProps({
  ref: String
});
</script>

<template>
    <span class="text-[#E2E8F0] flex gap-1 hover:text-white">
        <router-link :to="ref"><slot>Usuários</slot></router-link>
    </span>
</template>

<style scoped>
</style>
