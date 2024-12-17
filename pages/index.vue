<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
const color = useColor()
const { data: books, status } = await useLazyFetch('/api/books', {})

definePageMeta({
  layout: 'custom',
  middleware: 'auth',
})
</script>

<template>
  <div>Main</div>
  <ContentDoc />
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <div>{{ color }}</div>
  <div>{{ status === 'pending' ? 'Loading...' : books }}</div>
</template>

<style scoped></style>
