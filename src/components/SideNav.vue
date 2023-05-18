<script setup>
import NavLink from '@/components/SideNavLink.vue'
import { HomeIcon, StarIcon, CalendarIcon, CogSixToothIcon } from '@/assets/icons'

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

<template>
  <div
    class="flex flex-col px-6 py-5 w-[274px] flex-shrink-0 justify-between ml-2 my-3.5 shadow-lg rounded-[30px] bg-white"
  >
    <div class="flex flex-col gap-5">
      <div class="px-10">
        <img src="@/assets/icons/LOGO.svg" alt="eventurs_logo" />
      </div>
      <h2 class="font-bold text-secondary">Menu</h2>
      <hr class="bg-cardBg h-1.5 rounded-full" />
      <div v-for="navLink in navLinks">
        <NavLink :key="navLink.name" :name="navLink.name" :route="navLink.route">
          <component :is="navLink.icon" />
        </NavLink>
      </div>
    </div>
    <div class="flex gap-3 justify-start items-center">
      <div class="h-[50px] w-[50px] p-0.5 flex-shrink-0 rounded-full shadow border overflow-hidden">
        <img
          class="object-cover rounded-full w-full h-full"
          src="@/assets/images/default_profile.png"
          alt="user_profile"
        />
      </div>
      <div>
        <button class="font-bold text-black">Student Name</button>
        <button class="text-sm">View Profile</button>
      </div>
    </div>
  </div>
</template>
