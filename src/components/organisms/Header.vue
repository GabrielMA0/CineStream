<script setup lang="ts">
import Logo from '../atoms/Logo.vue';
import NavLink from '../molecules/NavLink.vue';
import { useAuthStore } from '../../store/auth';

const auth = useAuthStore();

</script>

<template>
    <header class="justify-center md:justify-between flex gap-5 px- md:px-10 py-5 border-b-[1px] border-b-[#E5E8EB] place-content-between flex-wrap">
        <Logo></Logo>
        <NavLink v-show="auth.user"></NavLink>
    </header>
  
</template>

<style scoped>
</style>
