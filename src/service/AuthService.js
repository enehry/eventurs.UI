import { apiClient } from './API'

const AuthService = {
  login(payload) {
    return apiClient.post('/login', payload)
  },
  register(payload) {
    return apiClient.post('/register', payload)
  },
  logout() {
    return apiClient.post('/logout')
  }
}
export default AuthService
