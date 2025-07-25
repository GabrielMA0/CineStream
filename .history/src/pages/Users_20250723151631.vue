<script setup lang="ts">
import Title from '../components/atoms/Title.vue';
</script>

<template>
  <Title>Usuários</Title>

  <table>
    <thead>
      <tr>
        <th class="border-r-2">Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>
</style>
