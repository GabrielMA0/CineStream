<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useField } from 'vee-validate';

const props = withDefaults(defineProps<{
  placeHolder?: string,
  name?: string,
  typeField?: string,
  styleField?: 'filter' | 'register' | 'date',
  modelValue?: string,
  readonly?: boolean,
  maxlength?: number | string,
}>(), {
  styleField: 'register',
  modelValue: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'input', event: Event): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const field = props.name ? useField(() => props.name as string) : null;

const localValue = ref(props.modelValue ?? '');

const fieldValue = computed<string>({
  get: () => field?.value.value ?? localValue.value,
  set: (val: string) => {
    if (field) {
      field.value.value = val;
    } else {
      localValue.value = val;
      emit('update:modelValue', val);
    }
  }
});

watch(() => props.modelValue, (val) => {
  if (!field) localValue.value = val ?? '';
});

const styleInputs = {
  filter: 'filter',
  register: 'register',
  date: 'date'
} as const;
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
      :maxlength="maxlength"
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
