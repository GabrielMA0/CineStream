<script setup lang="ts">
</script>

<template>
    <label class="text-[#E2E8F0] flex gap-1">
        <slot></slot>
        <span v-show="isRequired" class="text-[#6366F1]">*</span>
    </label>
</template>

<style scoped>
</style>
