import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useLoadingStore = defineStore('loading', () => {
  const state = reactive({
    status: 'idle',
    message: null
  })

  function setStatus(status) {
    state.status = status
  }

  function setMessage(message) {
    state.message = message
  }

  return {
    state,
    setStatus,
    setMessage
  }
})

const status = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error'
}

export { status, useLoadingStore }
