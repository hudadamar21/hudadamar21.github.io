<template>
  <div class="flex items-center">
    <h1 class="writing-vertical text-xl md:mr-5 font-bold text-gray-600">TAGS</h1>
    <ul class="flex flex-wrap my-5 gap-3">
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
import RippleButton from '@/components/RippleButton.vue'
import { reactive } from 'vue'
import { useStore } from 'vuex'
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

    const store = useStore()

    const setTag = (tag) => {
      store.commit('setTag', tag)
    }

    return { tags, setTag }
  }
}
</script>

<style lang="postcss">
  .tag-list {
    @apply px-2 py-1 text-sm bg-gray-800 hover:bg-gray-900 rounded cursor-pointer transition
  }
</style>