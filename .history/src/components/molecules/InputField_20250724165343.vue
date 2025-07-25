<script setup lang="ts">
import Label from '../atoms/Label.vue';
import Input from '../atoms/inputs/Input.vue';
import ErrorMessage from '../atoms/ErrorMessage.vue';

defineProps({
  messageLabel: String,
  placeHolder: String,
  typeField: String,
  isRequired: Boolean,
  value: String,
  readonly: Boolean,
  name: String
});

const emit = defineEmits(['update:modelValue', 'input', 'focus']);

</script>

<template>
    <div class="flex flex-col gap-2 relative">
        <Label :isRequired="isRequired" class="text-[#E2E8F0]">{{messageLabel}}</Label>
        <Input
        :readonly="readonly"
        :typeField="typeField" 
        @input="emit('input', $event)"
        @focus="emit('focus', $event)"
        :placeHolder="placeHolder" 
        :name="name"
        :value="value"
        />
        <ErrorMessage :name="name"></ErrorMessage>
    </div>
</template>

<style scoped>
</style>
