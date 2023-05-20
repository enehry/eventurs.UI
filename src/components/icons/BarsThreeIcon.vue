<template>
  <button
    :class="`flex flex-col justify-center gap-2 relative duration-300 ease-in ${
      navToggle ? 'gap-0' : 'delay-300'
    }`"
  >
    <div :class="`h-0.5 w-8 bg-black delay-300 ease-in ${navToggle && 'opacity-0'}`" />
    <div :class="`h-0.5 w-8 bg-black delay-300 ease-in ${navToggle && 'opacity-0'}`" />
    <div :class="`h-0.5 w-8 bg-black delay-300 ease-in ${navToggle && 'opacity-0'}`" />
    <div
      :class="`h-0.5 w-8 bg-black absolute duration-300 ease-in ${
        navToggle && 'delay-300 rotate-45'
      }`"
    />
    <div
      :class="`h-0.5 w-8 bg-black absolute duration-300 ease-in ${
        navToggle && 'delay-300 -rotate-45'
      }`"
    />
  </button>
</template>

<script setup>
defineProps({
  navToggle: {
    type: Boolean,
    default: false
  }
})
</script>
