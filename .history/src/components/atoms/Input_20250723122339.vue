<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  placeHolder: String,
  name: String,
  typeField:String
});

const { value: fieldValue, errorMessage: errorM } = useField(() => props.name ?? '');

</script>

<template>
    <input
      v-model="fieldValue"
      :type="typeField"
      :placeholder="placeHolder"
      class="outline-none border-none p-[16px] w-full bg-[#E8EDF5] rounded-[8px] max-w-[448px]"
      :class="{'bg-[#000]': errorM !== ''}"
    />
</template>

<style scoped>
</style>
