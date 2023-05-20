<script setup>
import { RouterView, useRoute } from 'vue-router'
import SideNav from '@/components/SideNav.vue'
import HamburgerMenu from '@/components/HamburgerMenu.vue'

const route = useRoute()
</script>

<template>
  <div
    v-if="route.meta.group != 'auth' && route.meta.group != 'landing'"
    class="h-screen flex justify-center gap-5 bg-cardBg"
  >
    <SideNav class="hidden md:flex" />
    <HamburgerMenu class="md:hidden" />
    <RouterView />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>
