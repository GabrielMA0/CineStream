<script setup lang="ts">
defineProps({
  messageLabel: String,
  placeHolder: String
});
</script>

<template>
  <label for="" class="text-[#E2E8F0]">{{messageLabel}}</label>
  <input type="text" :placeholder="placeHolder" class="border border-gray-300 rounded-md p-2 w-full" />
</template>

<style scoped>
</style>
