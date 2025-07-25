<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  placeHolder: String,
  name: String,
  typeField:String
});

const { value: fieldValue } = useField(() => props.name ?? '');

</script>

<template>
    <input
      v-model="fieldValue"
      :type="typeField"
      :placeholder="placeHolder"
      class="outline-none border-none p-[16px] w-full bg-[#242647] rounded-[8px] max-w-[448px]"
    />
</template>

<style scoped>
</style>
