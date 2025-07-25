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
  styleField: String,
  name: String
});

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur']);

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
        :placeHolder="placeHolder" 
        :name="name"
        :value="value"
        :styleField="styleField"
        />
        <ErrorMessage :name="name"></ErrorMessage>
    </div>
</template>

<style scoped>
</style>
