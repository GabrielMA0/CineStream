<script setup lang="ts">

defineProps<{
  statusType: String;
}>();
</script>


<template>
  <div :class="{'bg-[#EF4444]': statusType === 'desativado', 'bg-[#F59E0B]':  statusType === 'alugado', 'bg-[#22C55E]':  statusType === 'ativo'}" class="capitalize md:text-[14px] text-[#E2E8F0] text-center max-w-[135px] md:p-5 rounded-[12px] h-8 flex justify-center items-center">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
