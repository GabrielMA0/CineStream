<script setup lang="ts">

const props = defineProps({
  name: String
});


</script>

<template>
    <div class="bg-[#ff4242] p-5 text-white rounded-2 border-[1px solid #ff0000] absolute top-[20px]">
        <span v-show="errorM" class="text-[#EF4444] text-[12px]">
            {{errorM}}
        </span>
    </div>
    
</template>

<style scoped>
</style>
