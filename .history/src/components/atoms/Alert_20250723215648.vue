<script setup lang="ts">
defineProps({
    typeAlert: String
})
</script>

<template>
    <div class="bg-[#ff4242] p-5  rounded-[10px] border-[#ff0000] border-1 absolute top-[20px]">
        <span class="text-white text-[12px]">
            <slot></slot>
        </span>
    </div>
    
</template>

<style scoped>
</style>
