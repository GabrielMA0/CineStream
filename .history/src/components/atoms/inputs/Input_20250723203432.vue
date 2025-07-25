<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  placeHolder: String,
  name: String,
  typeField:String,
  styleField: String
});

const styleInputs = {
  filter: 'filter',
  register: 'register'
}

const { value: fieldValue } = useField(() => props.name ?? '');

</script>

<template>
  <div class="relative flex items-center">
    <img class="absolute right-3" src="/search-icon.svg" alt="icone de busca" />
    <input
      v-model="fieldValue"
      :type="typeField"
      :placeholder="placeHolder"
      :class="{'bg-[#242647] text-[#E2E8F0]': styleField === styleInputs.filter, 'bg-[#E8EDF5] text-black': styleField === styleInputs.register}"
      class="outline-none border-none p-[16px] w-full text-[#E2E8F0] rounded-[8px] max-w-[448px] pr-10"
    />
  </div>
</template>

<style scoped>
</style>
