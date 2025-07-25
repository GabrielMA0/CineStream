<script setup lang="ts">
import { useField } from 'vee-validate';


const props = withDefaults(defineProps<{
  placeHolder?: string,
  name?: string,
  typeField?: string,
  styleField?: string,
  userEdit?: string,
}>(), {
  styleField: 'register',
  userEdit: ''
});

const styleInputs = {
  filter: 'filter',
  register: 'register',
  date: 'date'
}

const { value: fieldValue } = useField(() => props.name ?? '');

</script>

<template>
  <div :class="{'relative flex items-center' : styleField === styleInputs.filter}">
    <img v-show="styleField === styleInputs.filter" class="absolute right-3" src="/search-icon.svg" alt="icone de busca" />
    <input
      v-model="fieldValue"
      :type="typeField"
      :placeholder="placeHolder"
      :class="{'bg-[#242647] text-[#E2E8F0] pr-10': styleField === styleInputs.filter || styleField === styleInputs.date, 'bg-[#E8EDF5] text-black': styleField === styleInputs.register}"
      class="outline-none border-none p-[16px] w-full text-[#E2E8F0] rounded-[8px] max-w-[448px] min-w-[200px]"
    />
  </div>
</template>

<style scoped>
</style>
