<template>
  <input :type="props.type" :placeholder="props.placeholder" class="login-input" />
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
