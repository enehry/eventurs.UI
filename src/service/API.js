import axios from 'axios'
import { useErrorStore } from '../stores/error.store'
import { status, useLoadingStore } from '../stores/loading.store'
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

// handle requests in the API
apiClient.interceptors.request.use(
  (request) => {
    // add the token to the request
    useErrorStore().clearState()
    useLoadingStore().setStatus(status.loading)
    return request
  },
  (config) => {
    // add the token to the request

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// handle responses in the API
apiClient.interceptors.response.use(
  (response) => {
    useLoadingStore().setStatus(status.success)
    // set status to idle after 5 seconds
    setTimeout(() => {
      useLoadingStore().setStatus(status.idle)
    }, 5000)
    return response
  },
  (error) => {
    const errorStore = useErrorStore()
    useLoadingStore().setStatus(status.error)

    switch (error.response.status) {
      case 401:
        // handle 401 errors
        break
      case 403:
      case 404:
        // handle 404 errors
        break
      case 422:
        // handle 422 errors
        errorStore.setState(error.response.data)
        break
      default:
        // handle other errors
        break
    }
    return Promise.reject(error)
  }
)

export { apiClient }
