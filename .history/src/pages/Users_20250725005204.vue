<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableUsers from '../components/organisms/tables/TableUsers.vue';
</script>

<template>
  <Title class="text-center md:text-left">Usuários</Title>

  <TableUsers></TableUsers>

  <router-link to="/users/new" class="w-full md:size-max">
    <Button class="w-full md:size-max">Cadastrar usuário</Button>
  </router-link>

</template>

<style scoped>
</style>
