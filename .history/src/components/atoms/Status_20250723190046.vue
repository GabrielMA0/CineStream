<script setup lang="ts">
type Status = 'active' | 'inactive' | 'rented';

defineProps<{
  statusType: Status;
}>();
</script>


<template>
  <div :class="{'bg-[#EF4444]': statusType === 'inactive', 'bg-[#F59E0B]':  statusType === 'rented', 'bg-[#22C55E]':  statusType === 'active'}" class="text-[14px] text-[#E2E8F0] text-center w-[148px] p-5 rounded-[12px] h-8 flex justify-center items-center">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
