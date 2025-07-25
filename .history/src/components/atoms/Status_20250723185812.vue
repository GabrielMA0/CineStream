<script setup lang="ts">
type Status = 'active' | 'inactive' | 'rented';

defineProps<{
  statusType: Status;
}>();
</script>


<template>
  <div class="text-[14px] text-[#E2E8F0] text-center bg-[#22C55E] w-[148px] p-5 rounded-[12px] h-8 flex justify-center items-center">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
