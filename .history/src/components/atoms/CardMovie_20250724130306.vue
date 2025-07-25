<script setup lang="ts">
import Button from '../atoms/Button.vue';
</script>

<template>
    
    <div class="flex flex-col gap-2.5 w-[176px] h-60 p-2.5 between">
        <img class="w-[18px]" src="/Logo.svg" alt="Movie Icon" />
        <slot></slot>
        <Button class="min-w-none">Alugar</Button>
    </div>
</template>

<style scoped>
</style>
