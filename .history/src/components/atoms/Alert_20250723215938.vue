<script setup lang="ts">
defineProps({
    typeAlert: String
})


</script>

<template>
    <div :class="{'bg-[#ff4242] border-[#ff0000]' : typeAlert === 'error', 'bg-[#22C55E] border-green-600' : typeAlert === 'sucess'}" class="p-5  rounded-[10px] border-1 absolute top-5">
        <span class="text-white text-[12px]">
            <slot></slot>
        </span>
    </div>
    
</template>

<style scoped>
</style>
