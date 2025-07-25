<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  name: String
});

const { value: fieldValue, errorMessage: errorM } = useField(() => props.name ?? '');

</script>

<template>
    <span class="text-[#EF4444] text-[12px]">
        <slot></slot>
    </span>
</template>

<style scoped>
</style>
