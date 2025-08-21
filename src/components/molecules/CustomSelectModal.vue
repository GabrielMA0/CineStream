<script setup lang="ts">
import type {Clients, Movie} from '../../types/general'

const props = withDefaults(defineProps<{
  placeholder: string;
  items: Clients[] | Movie[];
  modelValue: string;
}>(), {
  showModal: false,
  placeholder: '',
  items: () => []
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
  (e: 'select', value: Clients | Movie): void
}>()

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('change', value)
  emit('update:modelValue', value)
}

const onSelect = (item: Clients | Movie) => {
    emit('select', item)
}
</script>

<template>
    <div class="top-full absolute bg-[#ffff] w-full p-2.5 rounded-b-[8px] border-1 z-10" >
        <input class="outline-0 border-1 w-full mb-3 p-2" :value="modelValue" type="text" @input="onInput" :placeholder="placeholder">
        <ul class="flex flex-col gap-2.5">
            <li v-for="item in items" :key=" 'document' in item ? item.id : item.imdbID" @click="onSelect(item)" class="hover:text-[#6366F1] cursor-pointer w-full capitalize">
                {{"document" in item ? item?.name : item.Title}} {{ "document" in item ? item.lastName : ""}}
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
