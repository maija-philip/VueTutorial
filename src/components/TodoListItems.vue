<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useTaskStore } from '@/stores/tasks'
import Draggable from 'vuedraggable'

const taskStore = useTaskStore()
</script>

<template>
  <p v-if="taskStore.tasks.length < 1">Nothing to do yet</p>

  <!-- Draggable component -->
  <Draggable v-model="taskStore.tasks" item-key="id">
    <template #item="{ element, index }">
      <div class="todo-list-items">
        <TodoItem
          :key="element.id"  
          :name="element.name" 
          :index="index"
        />
      </div>
    </template>
  </Draggable>
</template>


<style scoped></style>
