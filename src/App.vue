<script setup lang="ts">
import Header from './components/organisms/Header.vue';
</script>

<template>
  <Header></Header>
    <main class="md:overflow-auto md:h-screen pb-[70px]">
      <section class="p-5 md:p-0 my-5 md:mx-[200px] flex flex-col gap-5 relative items-center">
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
    
    @media (max-width: 726px) {
      overflow: auto;
    }
  }
</style>
