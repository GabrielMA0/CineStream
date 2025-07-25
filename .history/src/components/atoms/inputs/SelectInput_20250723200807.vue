<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  isSelectField: Boolean
});

</script>

<template>
  <select v-if="isSelectField" v-for="value in optionsValue" name="select" class="outline-none border-none p-[16px] w-full bg-[#242647] text-[#E2E8F0] rounded-[8px] max-w-[448px] ">
    <option selected>Todos</option>
    <option :value="value">{{value}}</option>
  </select>

</template>

<style scoped>
</style>
