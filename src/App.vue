<script setup lang="ts">
import Input from './components/Input.vue'
import TodoListItems from './components/TodoListItems.vue'
import { ref, onMounted, computed, watch } from 'vue'
</script>

<template>
  <section>
    <h1>My Todo List</h1>
    <Input />
    <br />
    <TodoListItems />
  </section>
</template>

<style scoped>
section {
  width: 60%;
  margin: auto;
  text-align: center;
}

h1 {
  font-size: 4em;
}
</style>
