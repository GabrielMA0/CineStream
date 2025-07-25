<script setup lang="ts">

defineProps({
  optionsValue: Array,
});

</script>

<template>
  <select v-for="value in optionsValue" :key="value" name="select" class="outline-none border-none p-[16px] w-full bg-[#242647] text-[#E2E8F0] rounded-[8px] max-w-[448px] ">
    <option selected>Todos</option>
    <option> {{ value }}</option>
  </select>

</template>

<style scoped>
</style>
