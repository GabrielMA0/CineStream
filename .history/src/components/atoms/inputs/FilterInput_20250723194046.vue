<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  placeHolder: String,
  name: String,
  styleField: String,
  typeField:String
});

const { value: fieldValue } = useField(() => props.name ?? '');

</script>

<template>
    <input
      v-model="fieldValue"
      :type="typeField"
      :placeholder="placeHolder"
      class="outline-none border-none p-[16px] w-full bg-[#242647] text-[#E2E8F0] rounded-[8px] max-w-[448px]"
    >
      <img src="/search-icon.svg" alt="icone de busca" />
    </input>
</template>

<style scoped>
</style>
