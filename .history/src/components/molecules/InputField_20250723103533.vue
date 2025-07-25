<script setup lang="ts">
import Label from '../atoms/Label.vue';
import Input from '../atoms/Input.vue';
import ErrorMessage from '../atoms/ErrorMessage.vue';

const props = defineProps({
  messageLabel: String,
  placeHolder: String,
  modelValue: String,
  errorText: String,
  hasError: Boolean
});

console.log(props.hasError)
console.log(props.errorText)
</script>

<template>
    <div class="flex flex-col gap-2">
        <Label class="text-[#E2E8F0]">{{messageLabel}}</Label>
        <Input type="text" v-model="modelValue" :placeholder="placeHolder" class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
        <ErrorMessage v-show="hasError">{{errorText}}</ErrorMessage>
    </div>
</template>

<style scoped>
</style>
