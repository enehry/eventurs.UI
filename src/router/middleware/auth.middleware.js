// routerMiddleware.js
import { useAuthStore } from '@/stores/auth.store.js'

export const authMiddleware = async (to) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated()) {
    // redirect user to login page if unauthenticated
    if (to.meta.requiredAuth) {
      return { name: 'login' }
    }
  } else {
    // redirect user to dashboard page if authenticated
    if (to.meta.group === 'landing' || to.meta.group === 'auth') {
      return { name: 'dashboard' }
    }
  }
}
