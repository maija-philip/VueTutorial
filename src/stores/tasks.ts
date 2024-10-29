import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    'Finish Project',
    'Complete Presentation',
    'Create starter files',
    'create lesson plan',
    'teach class',
  ])
  function addTask(newTask: string) {
    tasks.value.push(newTask)
  }

  function deleteTask(index: number) {
    tasks.value.splice(index, 1)
  }

  return { tasks, addTask, deleteTask }
})
