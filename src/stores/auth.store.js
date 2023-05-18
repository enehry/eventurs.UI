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
    setCredentials(access_token, current_user)
    if (!access_token || !current_user) {
      return
    }

    //update credentials
    credentials.value.token = access_token
    credentials.value.user = current_user

    // redirect to the dashboard
    router.push({ name: 'dashboard' })
  }

  const isAuthenticated = () => !!credentials.value.token && !!credentials.value.user

  return {
    login,
    isAuthenticated,
    isLoading,
    credentials
  }
})
