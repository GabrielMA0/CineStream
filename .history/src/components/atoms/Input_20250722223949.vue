<script setup lang="ts">
defineProps({
  messageLabel: String,
  placeHolder: String
});
</script>

<template>
  <label for="" class="text-[#E2E8F0]">{{messageLabel}}</label>
  <input type="text" :placeholder="placeHolder" class="border-none p-2 w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
</template>

<style scoped>
</style>
