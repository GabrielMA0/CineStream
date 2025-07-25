<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
import Input from '../components/atoms/inputs/Input.vue';
</script>

<template>
        <Title>Filmes</Title>
        <div class="flex gap-4">
            <Input styleField="filter" placeHolder="Nome, CPF" @input="filterClient"></Input>
        </div>
</template>

<style scoped>
</style>
