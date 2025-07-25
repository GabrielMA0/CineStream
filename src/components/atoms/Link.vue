<script setup lang="ts">
defineProps({
  url: String
});
</script>

<template>
    <span class="text-[#E2E8F0] flex gap-1 hover:text-white ">
        <router-link v-if="url" :to="url">
            <slot></slot>
        </router-link>

        <span class="flex gap-2" v-else>
            <slot class="w-[18px]"></slot>
        </span>
    </span>
</template>

<style scoped>
</style>
