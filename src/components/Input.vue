<script setup lang="ts">
// use store and create a state variable called item
// add task function
</script>

<template></template>

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
