<script setup>
import { useRoute } from 'vue-router'
import { RArrowFilledIcon } from '@/components/icons'
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
    :class="`w-full truncate ${
      route.name !== props.route ? 'hover:text-blue-500 hover:pl-2.5 duration-100' : ''
    }`"
  >
    <div class="flex justify-center items-center gap-5">
      <div class="flex justify-start gap-5 w-24 relative">
        <RArrowFilledIcon
          v-if="route.name === props.route"
          class="inline-block absolute -left-10"
        />
        <slot>
          <!-- icon component -->
        </slot>
        <p>{{ props.name }}</p>
      </div>
    </div>
  </button>
</template>
