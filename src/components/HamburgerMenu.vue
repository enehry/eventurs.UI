<template>
  <div
    :class="`flex flex-col absolute left-0 w-full px-6 py-5 justify-between shadow-lg bg-white ease-in delay-200 duration-300 overflow-hidden ${
      !navToggle ? 'h-20' : 'h-screen'
    }`"
  >
    <div class="flex flex-col gap-5 delay-200 duration-150">
      <div class="flex justify-between items-center">
        <div>
          <img src="@/assets/icons/LOGO.svg" alt="eventurs_logo" />
        </div>
        <BarsThreeIcon :navToggle="navToggle" @click="navToggle = !navToggle" />
      </div>
      <div class="flex flex-col gap-3 justify-start items-center delay-200 duration-150">
        <div class="h-24 w-24 p-0.5 flex-shrink-0 rounded-full shadow border overflow-hidden">
          <img
            class="object-cover rounded-full w-full h-full"
            src="@/assets/images/default_profile.png"
            alt="user_profile"
          />
        </div>
        <div class="text-center">
          <button class="block font-bold text-black">Student Name</button>
          <button class="text-sm">View Profile</button>
        </div>
      </div>
      <hr class="bg-cardBg h-0.5 rounded-full" />
      <template v-for="(navLink, index) in navLinks" :key="index">
        <HamburgerLink :name="navLink.name" :route="navLink.route" @click="navToggle = !navToggle">
          <component :is="navLink.icon" />
        </HamburgerLink>
      </template>
    </div>
  </div>
</template>
<script setup>
import HamburgerLink from '@/components/HamburgerLink.vue'
import { ref } from 'vue'
import { HomeIcon, StarIcon, CalendarIcon, CogSixToothIcon } from '@/components/icons'
import { BarsThreeIcon } from '@/components/icons'

const navToggle = ref(false)

const navLinks = [
  {
    icon: HomeIcon,
    name: 'Dashboard',
    route: 'dashboard'
  },
  {
    icon: StarIcon,
    name: 'Events',
    route: 'events'
  },
  {
    icon: CalendarIcon,
    name: 'Calendar',
    route: 'calendar'
  },
  {
    icon: CogSixToothIcon,
    name: 'Settings',
    route: 'settings'
  }
]
</script>
