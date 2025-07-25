<script setup lang="ts">
defineProps({
  placeHolder: String,
  value: String
});
</script>

<template>
    <input v-model="value" type="text" :placeholder="placeHolder" class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
</template>

<style scoped>
</style>
