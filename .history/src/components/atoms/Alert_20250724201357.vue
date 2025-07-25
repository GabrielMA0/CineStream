<script setup lang="ts">
defineProps({
    typeAlert: String
})


</script>

<template>
    <div :class="{'bg-[#ff4242] border-[#ff0000]' : typeAlert === 'error', 'bg-[#22C55E] border-green-600' : typeAlert === 'sucess', 'bg-[#FACC15] border-[#E3B500]' : typeAlert === 'warning'}" class="p-5   rounded-[10px] border-1 absolute top-5 right-0">
        <span class="text-white text-[12px] font-bold">
            <slot></slot>
        </span>
    </div>
    
</template>

<style scoped>
</style>
