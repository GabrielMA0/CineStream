<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  name: String
});

const { errorMessage: errorM } = useField(() => props.name ?? '');

</script>

<template>
    <span v-show="errorM !== ''" class="text-[#EF4444] text-[12px] absolute bottom-[-25px]">
        {{errorM}}
    </span>
</template>

<style scoped>
</style>
