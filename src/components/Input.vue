<template>
  <input :type="type" :placeholder="placeholder" class="login-input" />
</template>

<script setup>
import { defineProps } from 'vue'

const { type, placeholder } = defineProps(['type', 'placeholder'])
</script>
