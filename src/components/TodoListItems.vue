<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useTaskStore } from '@/stores/tasks'
import draggable from 'vuedraggable'

const taskStore = useTaskStore()
</script>

<template>
  <p v-if="taskStore.tasks.length < 1">Nothing todo yet</p>
  <draggable v-model="taskStore.tasks" tag="div" class="todo-list-items">
    <template #item="{element, index}">
      <TodoItem
        :key="index"
        :name="element"
        :index="index"
      />
    </template>
  </draggable>
</template>

<style scoped></style>
