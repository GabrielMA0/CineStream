<script setup lang="ts">
import Header from './components/organisms/Header.vue';
</script>

<template>
  <Header></Header>
    <main class="overflow-auto h-screen">
      <section class="my-5 mx-[200px] flex flex-col gap-5 relative">
        <router-view></router-view>
      </section>
    </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  body{
    background-color: #0F172A;
    font-family: "Inter", sans-serif;
    overflow: hidden;
  }
</style>
