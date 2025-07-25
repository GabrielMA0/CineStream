<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useField } from 'vee-validate';

const props = withDefaults(defineProps<{
  placeHolder?: string,
  name?: string,
  typeField?: string,
  styleField?: string,
  modelValue?: string,
  readonly?: boolean
}>(), {
  styleField: 'register',
  modelValue: ''
});

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur']);

// Detecta se está dentro de um form (VeeValidate)
const field = props.name ? useField(() => props.name) : null;

// Se não estiver em um form, usamos valor local
const localValue = ref(props.modelValue || '');

// Computado para lidar com v-model
const fieldValue = computed({
  get: () => field?.value.value ?? localValue.value,
  set: (val) => {
    if (field) {
      field.value.value = val;
    } else {
      localValue.value = val;
      emit('update:modelValue', val);
    }
  }
});

// Atualiza localValue se o pai mudar externamente
watch(() => props.modelValue, (val) => {
  if (!field) localValue.value = val ?? '';
});

const styleInputs = {
  filter: 'filter',
  register: 'register',
  date: 'date'
};
</script>

<template>
  <div :class="{'relative flex items-center': styleField === styleInputs.filter}">
    <img v-if="styleField === styleInputs.filter" class="absolute right-3" src="/search-icon.svg" alt="ícone de busca" />
    <input
      :readonly="readonly"
      v-model="fieldValue"
      :type="typeField"
      @input="emit('input', $event)"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      :placeholder="placeHolder"
      :class="{
        'bg-[#242647] text-[#E2E8F0] pr-10': styleField === styleInputs.filter || styleField === styleInputs.date,
        'bg-[#E8EDF5] text-black': styleField === styleInputs.register
      }"
      class="outline-none border-none p-[16px] w-full text-[#E2E8F0] rounded-[8px] min-w-[200px]"
    />
  </div>
</template>

<style scoped>
</style>
