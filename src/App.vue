<script setup lang="ts">
import Input from './components/Input.vue'
import TodoItem from './components/TodoItem.vue'
</script>

<template>
  <section>
    <h1>Todo List</h1>
    <Input value="" />
    <TodoItem name="finish project" />
  </section>
</template>

<style scoped>
section {
  width: 60%;
  margin: auto;
  text-align: center;
}
</style>
