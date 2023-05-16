<script setup>
import { useRoute } from 'vue-router'
import { RArrowFilledIcon } from '@/assets/icons'
import router from '@/router'

const props = defineProps({
  name: String,
  route: String
})
const route = useRoute()

const handleClick = () => {
  router.push({ name: props.route })
}
</script>

<template>
  <button
    @click="handleClick"
    :class="`flex justify-start items-center gap-5 w-full${
      route.name !== props.route ? 'hover:text-blue-500 hover:pl-2.5 duration-100' : ''
    }`"
  >
    <RArrowFilledIcon v-if="route.name === props.route" class="h-[30px] w-[30px] inline-block" />
    <slot><!-- icon component --></slot>
    <p>{{ props.name }}</p>
  </button>
</template>
