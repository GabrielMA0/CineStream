<script setup lang="ts">

const props = defineProps({
  name: String
});


</script>

<template>
    <div>
<span v-show="errorM !== ''" class="text-[#EF4444] text-[12px]">
        {{errorM}}
    </span>
    </div>
    
</template>

<style scoped>
</style>
