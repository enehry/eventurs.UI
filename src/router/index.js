import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        group: 'landing'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        group: 'landing'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        group: 'auth'
      },
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        group: 'auth'
      },
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/DashboardView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/events/EventsView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/calendar/CalendarView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings/SettingsView.vue')
    }
  ]
})

export default router
