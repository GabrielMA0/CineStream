<script setup lang="ts">
defineProps({
  typeBtn: String
});
</script>

<template>
  <button :type="typeBtn" class="p-[10px] w-[200px] bg-[#6366F1] text-[#E2E8F0] border-none rounded-[8px] cursor-pointer hover:bg-[#4F46E5]">
    <slot></slot>
  </button>
</template>

<style scoped>
</style>
