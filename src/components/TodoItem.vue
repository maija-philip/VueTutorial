<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="todo-item">
    <p class="item-name">{{ name }}</p>
    <button><font-awesome-icon :icon="['fas', 'xmark']" class="icon" /></button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  flex-direction: row;

  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: var(--vt-c-text-dark-2);
  outline: none;

  font-size: 1em;
  padding: 1em 2em;
  margin: 0.5em auto;
  color: var(--vt-c-indigo);
  text-align: left;
}

.todo-item .item-name {
  width: 100%;
}

.todo-item button {
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 50px;
  padding: 0.25em 0.5em;
}

.todo-item button:hover {
  background-color: var(--vt-c-grey-dark);
}
.todo-item button:active {
  background-color: transparent;
  color: var(--vt-c-grey-dark);
}

.todo-item .icon {
  margin: auto;
}
</style>
