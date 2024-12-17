<script setup lang="ts">
  const { sayText } = useUtils();
  sayText();
  const { $hello } = useNuxtApp();
</script>

<template>
  <Alert />
  <div>Books</div>
  <div>
    <router-link to="/books/1">Book 1</router-link>
    <router-link to="/books/2">Book 2</router-link>
  </div>
</template>

<style scoped></style>
