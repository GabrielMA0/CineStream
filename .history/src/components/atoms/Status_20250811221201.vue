<script setup lang="ts">
import {Status, StatusRental} from "../../types/general"
defineProps<{
  statusType: Status | StatusRental;
}>();
</script>


<template>
  <div :class="{'bg-[#EF4444]': statusType === 'inativo', 'bg-[#F59E0B]':  statusType === 'alugado', 'bg-[#22C55E]':  statusType === 'ativo' || statusType === 'entregue' }" class="capitalize text-[10px] md:text-[14px] text-[#E2E8F0] text-center max-w-[135px] md:p-5 rounded-[12px] h-8 flex justify-center items-center">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
