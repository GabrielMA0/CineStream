<script setup lang="ts">
defineProps({
  messageLabel: String,
  placeHolder: String
});
</script>

<template>
        <input type="text" :placeholder="placeHolder" class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
</template>

<style scoped>
</style>
