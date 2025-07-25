<script setup lang="ts">
defineProps({
  placeHolder: String,
  modelValue: String,
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      type="text"
      :placeholder="placeHolder"
      class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]"
    />
</template>

<style scoped>
</style>
