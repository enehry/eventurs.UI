<script setup>
import { useRoute } from 'vue-router'
import { RArrowFilledIcon } from '@/assets/icons'
import router from '@/router'

const props = defineProps({
  navLinkName: String
})
const linkName = props.navLinkName.toLowerCase()
const route = useRoute()

const handleClick = () => {
  router.push({ name: linkName })
}
</script>

<template>
  <button
    @click="handleClick"
    :class="`flex justify-start items-center gap-5 ${
      route.name !== linkName ? 'hover:text-blue-500 hover:pl-2.5 duration-100' : ''
    }`"
  >
    <RArrowFilledIcon
      :class="`h-[30px] w-[30px] ${route.name !== linkName ? 'hidden' : 'inline-block'}`"
    />
    <slot><!-- icon component --></slot>
    <p>{{ props.navLinkName }}</p>
  </button>
</template>
