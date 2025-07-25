<script setup lang="ts">
type Status = 'ativo' | 'inativo' | 'alugado';

defineProps<{
  statusType: Status;
}>();
</script>


<template>
  <div :class="{'bg-[#EF4444]': statusType === 'inativo', 'bg-[#F59E0B]':  statusType === 'alugado', 'bg-[#22C55E]':  statusType === 'ativo'}" class="text-[14px] text-[#E2E8F0] text-center w-[148px] p-5 rounded-[12px] h-8 flex justify-center items-center">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
