<script setup lang="ts">
defineProps({
  messageLabel: String,
});
</script>

<template>
    <label class="text-[#E2E8F0]">
        <slot></slot>
    </label>
</template>

<style scoped>
</style>
