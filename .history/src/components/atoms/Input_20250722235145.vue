<script setup lang="ts">
defineProps({
  messageLabel: String,
  placeHolder: String
});
</script>

<template>
    <div class="flex flex-col gap-2">
        <label for="field" class="text-[#E2E8F0]">{{messageLabel}}</label>
        <input id="field" type="text" :placeholder="placeHolder" class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
    </div>
</template>

<style scoped>
</style>
