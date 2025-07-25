<script setup lang="ts">
import Header from './components/organisms/Header.vue';
</script>

<template>
  <Header></Header>
      <main class="flex flex-col justify-center items-center h-screen gap-5 relative">
    </main>

  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  body{
    background-color: #0F172A;
    font-family: "Inter", sans-serif;
    overflow: hidden;
  }
</style>
