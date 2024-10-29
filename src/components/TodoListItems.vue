<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useTaskStore } from '@/stores/tasks'

const taskStore = useTaskStore()
</script>

<template>
  <p v-if="taskStore.tasks.length < 1">Nothing todo yet</p>
  <div class="todo-list-items">
    <TodoItem
      v-for="(task, index) in taskStore.tasks"
      :key="index"
      :name="task"
      :index="index"
    />
  </div>
</template>

<style scoped></style>
