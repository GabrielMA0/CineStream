<script setup lang="ts">
import Label from '../atoms/Label.vue';
import Input from '../atoms/Input.vue';
import ErrorMessage from '../atoms/ErrorMessage.vue';

defineProps({
  messageLabel: String,
  placeHolder: String,
  valuesModel: String,
  errorText: String,
  hasError: Boolean
});
</script>

<template>
    <div class="flex flex-col gap-2">
        <Label class="text-[#E2E8F0]">{{messageLabel}}</Label>
        <Input type="text" :v-model='valuesModel' :placeholder="placeHolder" class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
        <ErrorMessage v-show="hasError">{{errorText}}</ErrorMessage>
    </div>
</template>

<style scoped>
</style>
