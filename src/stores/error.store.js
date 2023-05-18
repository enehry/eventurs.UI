import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

const useErrorStore = defineStore('error', () => {
  const state = reactive({
    message: null,
    errors: {}
  })

  function setState(data) {
    state.errors = data.errors
    state.message = data.message
  }

  function clearState() {
    state.errors = {}
    state.message = null
  }

  // check if there is an error
  const hasErrors = () => computed(() => !!state.errors)

  return {
    state,
    setState,
    hasErrors,
    clearState
  }
})

export { useErrorStore }
