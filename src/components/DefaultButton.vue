<template>
  <button
    class="px-4 py-2 h-[45px] md:h-[50px] rounded-md w-full bg-primary text-whiteText font-medium tracking-wide hover:bg-darkBlue duration-300"
    :class="[isLoading(), isOpacity()]"
    :disabled="isDisabled()"
  >
    <div v-if="props.isLoading">Loading</div>
    <slot v-else></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})

// check if the button is loading
const isLoading = () => {
  if (props.isLoading) {
    return 'cursor-not-allowed'
  }
}

// check if the button is loading
const isDisabled = () => {
  if (props.isLoading) {
    return true
  }
}

// create a function to check if the button is loading
const isOpacity = () => {
  if (props.isLoading) {
    return 'opacity-50'
  }
}
</script>
