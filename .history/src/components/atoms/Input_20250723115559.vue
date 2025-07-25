<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  placeHolder: String,
  modelValue: String,
  name: String,
  typeField:String
});
const emit = defineEmits(['update:modelValue']);

const { value, errorMessage } = useField(() => props.name);
</script>
</script>

<template>
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :type="typeField"
      :placeholder="placeHolder"
      class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]"
    />
</template>

<style scoped>
</style>
