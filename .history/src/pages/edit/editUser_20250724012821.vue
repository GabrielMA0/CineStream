<script setup lang="ts">
import Title from '../../components/atoms/Title.vue';
import UsersForm from '../../components/organisms/forms/UsersForm.vue';

const route = useRoute()
const id = route.params.id as string

console.log('ID:', id)

</script>

<template>
    <Title class="text-center">Editar Usuário</Title>
    <UsersForm></UsersForm>
</template>

<style scoped>
</style>
