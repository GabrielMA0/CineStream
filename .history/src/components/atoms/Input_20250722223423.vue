<script setup lang="ts">
defineProps({
  messageLabel: String
});
</script>

<template>
  <label for="">{{messageLabel}}</label>
  <input type="text" placeholder="Digite algo" class="border border-gray-300 rounded-md p-2 w-full" />
</template>

<style scoped>
</style>
