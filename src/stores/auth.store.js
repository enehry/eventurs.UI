import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCredentials, setCredentials } from '../helper/LocalStorage'
import router from '../router'
import AuthService from '../service/AuthService'

export const useAuthStore = defineStore('auth', () => {
  const credentials = ref(getCredentials())
  const isLoading = ref(false)

  async function login(email, password) {
    const res = await AuthService.login({ email, password })
    const { access_token, current_user } = res.data

    if (!access_token || !current_user) {
      return
    }

    setCredentials(access_token, current_user)

    //update credentials
    credentials.value.token = access_token
    credentials.value.user = current_user

    // redirect to the dashboard
    router.push({ name: 'dashboard' })
  }

  const isAuthenticated = () => !!credentials.value.token && !!credentials.value.user

  // TODO:  implement the register function
  async function register(name, email, password, password_confirmation) {
    //TODO:  use the AuthService to register the user
    //TODO:  check if access_token and current_user are present in the response if not return
    //TODO:  update credentials
    //TODO: set the credentials using setCredentials
    //TODO:  if the registration is successful redirect to dashboard
    try {
      const res = await AuthService.register({ name, email, password, password_confirmation })
      const { access_token, current_user } = res.data

      if (!access_token || !current_user) {
        return
      }

      setCredentials(access_token, current_user)

      //update credentials
      credentials.value.token = access_token
      credentials.value.user = current_user

      // redirect to the dashboard
      router.push({ name: 'dashboard' })
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        const validationErrors = error.response.data.errors
        // Do something with the validation errors (e.g., display them to the user)
        console.log(validationErrors)
      } else {
        // Handle other types of errors
        // Display a generic error message or perform any necessary actions
      }
    }
  }

  async function logout() {}

  return {
    login,
    isAuthenticated,
    logout,
    register,
    isLoading,
    credentials
  }
})
