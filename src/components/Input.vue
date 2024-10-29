<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useTaskStore } from '@/stores/tasks'

const taskStore = useTaskStore()
const item = ref('')

function addTask() {
  if (item.value) {
    taskStore.addTask(item.value)
    item.value = ''
  } else {
    console.log('No task')
  }
}
</script>

<template>
  <div class="todo-input">
    <label for="item">New Item</label>
    <div>
      <input
        type="text"
        v-model="item"
        placeholder="Add a new task ..."
        @keyup.enter="addTask()"
      />
      <button @click="addTask()">
        <font-awesome-icon :icon="['fas', 'paper-plane']" />
      </button>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.todo-input {
  display: flex;
  flex-direction: column;
}

.todo-input label {
  margin-left: 1em;
  text-align: left;
}

.todo-input div {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 100px;

  background-color: var(--vt-c-text-dark-2);
  color: var(--vt-c-green-dark);
  font-size: 1em;
  padding: 1em 2em;
}

.todo-input input {
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;

  color: var(--vt-c-green-dark);
  font-size: 1em;
}

button {
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--vt-c-green-dark);
}

button:hover {
  color: var(--vt-c-green);
}
button:active {
  color: var(--vt-c-grey-dark);
}
</style>
