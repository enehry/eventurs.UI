<template>
  <input
    :name="props.name"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="login-input"
    :class="props.errorBorder"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineEmits(['update:modelValue'])
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  errorBorder: {
    type: String,
    default: ''
  }
})
</script>
