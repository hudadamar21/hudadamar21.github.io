<template>
  <div class="flex flex-col lg:flex-row lg:items-center">
    <h1 class="lg:writing-vertical pl-2 tracking-widest lg:pl-0 text-xl lg:mr-5 font-bold lg:text-gray-600">
      TAGS
    </h1>
    <ul class="flex flex-wrap py-2 lg:my-5 gap-3">
      <RippleButton 
        v-for="tag of tags"
        :key="tag"
        backlight="none" 
        size="sm" 
        class="tag-list"
        @click="setTag(tag)"
      > 
        {{ tag }}
      </RippleButton>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { setTag } from './portfolioStore'

import RippleButton from '@/components/RippleButton.vue'

export default {
  components: { RippleButton },
  setup(){
    const tags = reactive([
      'Tailwindcss',
      'Vuejs',
      'Firebase',
      'API',
      'PWA',
      'Reactjs',
      'HTML',
      'CSS',
      'Javascript',
    ])

    return { tags, setTag }
  }
}
</script>

<style lang="postcss">
  .tag-list {
    @apply px-2 py-1 text-sm bg-gray-800 hover:bg-gray-900 rounded cursor-pointer transition
  }
</style>