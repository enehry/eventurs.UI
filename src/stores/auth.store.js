import { defineStore } from 'pinia'
import AuthService from '../service/AuthService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: JSON.parse(localStorage.getItem('token')),
    user: JSON.parse(localStorage.getItem('user'))
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    login: async (email, password) => {
      const res = await AuthService.login({ email, password })
      const { access_token, current_user } = res.data

      this.token = access_token
      this.user = current_user

      localStorage.setItem('token', JSON.stringify(access_token))
      localStorage.setItem('user', JSON.stringify(current_user))
    }
  }
})
