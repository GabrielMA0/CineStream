<script setup lang="ts">
import Logo from '../atoms/Logo.vue';
import NavLink from '../molecules/NavLink.vue';
import { useAuthStore } from '../../store/auth';

const auth = useAuthStore();

</script>

<template>
    <header class="flex gap-2 px-10 py-5 border-b-[1px] border-b-[#E5E8EB] place-content-between flex-wrap">
        <Logo></Logo>
        <NavLink v-show="auth.user"></NavLink>
    </header>
  
</template>

<style scoped>
</style>
