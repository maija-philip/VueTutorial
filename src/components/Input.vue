<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div class="todo-input">
    <label for="item">New Item</label>
    <input type="text" id="item" name="item" value="{{value}}" />
  </div>
</template>

<style scoped>
.todo-input {
  display: flex;
  flex-direction: column;
}

.todo-input label {
  margin-left: 1em;
  text-align: left;
}

.todo-input input {
  width: 100%;
  border: none;
  border-radius: 100px;
  outline: none;

  background-color: var(--vt-c-text-dark-2);
  color: var(--vt-c-green-dark);
  font-size: 1em;
  padding: 1em 2em;
}
</style>
