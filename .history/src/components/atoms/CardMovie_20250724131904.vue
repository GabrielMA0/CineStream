<script setup lang="ts">
import Button from '../atoms/Button.vue';
</script>

<template>
    
    <div class="flex flex-col h-[400px] place-content-between">
        <slot></slot>
        <Button class="min-w-none">Alugar</Button>
    </div>
</template>

<style scoped>
</style>
