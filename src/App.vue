<script setup>
import { RouterView, useRoute } from 'vue-router'
import SideNav from '@/components/SideNav.vue'

const route = useRoute()
</script>

<template>
  <div
    v-if="route.meta.group != 'auth' && route.meta.group != 'landing'"
    class="h-screen flex justify-center gap-5 bg-cardBg"
  >
    <SideNav />
    <RouterView />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>
