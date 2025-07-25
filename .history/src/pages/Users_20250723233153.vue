<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableUsers from '../components/organisms/tables/TableUsers.vue';
import { useUserStore } from '../store/user';

const user = useUserStore();

</script>

<template>
  <Title>Usuários</Title>

  <TableUsers></TableUsers>

  <router-link to="/users/new">
    <Button>Cadastrar usuário</Button>
  </router-link>

</template>

<style scoped>
</style>
