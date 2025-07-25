<script setup lang="ts">
import Label from '../atoms/Label.vue';
import Input from '../atoms/inputs/Input.vue';
import ErrorMessage from '../atoms/ErrorMessage.vue';

defineProps({
  messageLabel: String,
  placeHolder: String,
  typeField: String,
  isRequired: Boolean,
  name: String
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex flex-col gap-2">
        <Label :isRequired="isRequired" class="text-[#E2E8F0]">{{messageLabel}}</Label>
        <Input 
        :typeField="typeField" 
        @update:modelValue="emit('update:modelValue', $event)" 
        :placeHolder="placeHolder" 
        :name="name"
        />
        <ErrorMessage :name="name"></ErrorMessage>
    </div>
</template>

<style scoped>
</style>
