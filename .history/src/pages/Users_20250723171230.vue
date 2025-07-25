<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Button from '../components/atoms/Button.vue';
import TableUsers from '../components/organisms/tables/TableUsers.vue';
</script>

<template>
  <Title>Usuários</Title>

  <TableUsers></TableUsers>

  <Button>Cadastrar usuário</Button>

</template>

<style scoped>
</style>
