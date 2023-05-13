<template>
  <input :type="type" :placeholder="placeholder" class="login-input" />
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>
