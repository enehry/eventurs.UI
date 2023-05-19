import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCredentials, setCredentials } from '../helper/LocalStorage'
import router from '../router'
import AuthService from '../service/AuthService'

export const useAuthStore = defineStore('auth', () => {
  const { token, user } = getCredentials()
  const isLoading = ref(false)

  async function login(email, password) {
    const res = await AuthService.login({ email, password })
    const { access_token, current_user } = res.data

    setCredentials(access_token, current_user)

    if (!access_token || !current_user) {
      return
    }
    // redirect to the dashboard
    router.push({ name: 'dashboard' })
  }

  const isAuthenticated = () => !!token && !!user

  return {
    login,
    isAuthenticated,
    isLoading,
    token,
    user
  }
})
