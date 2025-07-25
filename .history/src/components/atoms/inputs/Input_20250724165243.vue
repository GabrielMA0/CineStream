<script setup lang="ts">
import { useField } from 'vee-validate';
import { watch } from 'vue';

const props = withDefaults(defineProps<{
  placeHolder?: string,
  name?: string,
  typeField?: string,
  styleField?: string,
  value?: string,
  readonly?: boolean
}>(), {
  styleField: 'register',
  value: ''
});

const { value: fieldValue } = useField(() => props.name ?? '');

watch(
  () => props.value,
  (newVal) => {
    if (newVal !== undefined && newVal !== null && newVal !== '') {
      fieldValue.value = newVal;
    }
  },
  { immediate: true }
);

const styleInputs = {
  filter: 'filter',
  register: 'register',
  date: 'date'
}

const emit = defineEmits(['update:modelValue', 'input', 'focus']);

</script>

<template>
  <div :class="{'relative flex items-center' : styleField === styleInputs.filter}">
    <img v-show="styleField === styleInputs.filter" class="absolute right-3" src="/search-icon.svg" alt="icone de busca" />
    <input
      :readonly="readonly"
      v-model="fieldValue"
      :type="typeField"
      @input="emit('input', $event)"
      :placeholder="placeHolder"
      :class="{'bg-[#242647] text-[#E2E8F0] pr-10': styleField === styleInputs.filter || styleField === styleInputs.date, 'bg-[#E8EDF5] text-black': styleField === styleInputs.register}"
      class="outline-none border-none p-[16px] w-full text-[#E2E8F0] rounded-[8px] min-w-[200px]"
    />
  </div>
</template>

<style scoped>
</style>
