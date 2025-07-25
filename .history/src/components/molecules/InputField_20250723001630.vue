<script setup lang="ts">
import Label from '../atoms/Label.vue';
</script>

<template>
    <div class="flex flex-col gap-2">
        <Label class="text-[#E2E8F0]">{{messageLabel}}</Label>
        <input type="text" :placeholder="placeHolder" class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]" />
    </div>
</template>

<style scoped>
</style>
