import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: 1, name: 'Finish Project' },
    { id: 2, name: 'Complete Presentation' },
    { id: 3, name: 'Create starter files' },
    { id: 4, name: 'Create lesson plan' },
    { id: 5, name: 'Teach class' },
  ])
  
  function addTask(newTask: { id: number; name: string }) {
    tasks.value.push(newTask)
  }

  function deleteTask(index: number) {
    tasks.value.splice(index, 1)
  }

  return { tasks, addTask, deleteTask }
})