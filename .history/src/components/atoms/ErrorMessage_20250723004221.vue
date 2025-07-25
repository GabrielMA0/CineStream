<script setup lang="ts">
defineProps({
  messageLabel: String,
});
</script>

<template>
    <span class="text-[#E2E8F0]">
        <slot></slot>
    </span>
</template>

<style scoped>
</style>
