<script setup lang="ts">
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

     <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
