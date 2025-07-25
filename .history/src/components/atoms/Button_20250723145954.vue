<script setup lang="ts">
defineProps({
  typeBtn?: 'button' | 'submit' | 'reset';
});
</script>

<template>
  <button :type="typeBtn" class="p-[10px] bg-[#6366F1] text-[#E2E8F0] border-none rounded-[8px] min-w-[219px] cursor-pointer hover:bg-[#4F46E5]">
    <slot></slot>
  </button>
</template>

<style scoped>
</style>
