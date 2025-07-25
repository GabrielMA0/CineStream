<script setup lang="ts">
defineProps({
  isRequired: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
    <label class="text-[#E2E8F0] flex gap-1">
        <slot></slot>
        <span v-show="isRequired">*</span>
    </label>
</template>

<style scoped>
</style>
