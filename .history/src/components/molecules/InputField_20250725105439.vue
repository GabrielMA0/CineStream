<script setup lang="ts">
import Label from '../atoms/Label.vue';
import Input from '../atoms/inputs/Input.vue';
import ErrorMessage from '../atoms/ErrorMessage.vue';
import type { StyleField } from '../../types/general';

defineProps<{
  messageLabel?: string;
  placeHolder?: string;
  typeField?: string;
  isRequired?: boolean;
  modelValue?: string;
  readonly?: boolean;
  styleField?: StyleField;
  maxlength?: string | number;
  name: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'input', event: Event): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();
</script>


<template>
    <div class="flex flex-col gap-2 relative w-full md:w-auto">
        <Label :isRequired="isRequired" class="text-[#E2E8F0]">{{messageLabel}}</Label>
        <Input
        :readonly="readonly"
        :typeField="typeField" 
        @input="emit('input', $event)"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        @update:modelValue="emit('update:modelValue', $event)"
        :placeHolder="placeHolder" 
        :name="name"
        :modelValue="modelValue"
        :styleField="styleField"
        :maxlength="maxlength"
        />
        <ErrorMessage :name="name"></ErrorMessage>
    </div>
</template>

<style scoped>
</style>
