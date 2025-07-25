<script setup lang="ts">
const props = defineProps({
  placeHolder: String,
  modelValue: String
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input
      v-model="modelValue"
      type="text"
      :placeholder="placeHolder"
      class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]"
    />
</template>

<style scoped>
</style>
