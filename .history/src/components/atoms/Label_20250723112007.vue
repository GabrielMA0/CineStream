<script setup lang="ts">
defineProps({
  isRequired: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
    <label class="text-[#E2E8F0]">
        <slot></slot>
      </label>
      <span v-show="isRequired">*</span>
</template>

<style scoped>
</style>
