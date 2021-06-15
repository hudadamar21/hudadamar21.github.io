<template>
  <div class="mb-8 flex items-center tracking-tighter">
    <h1 class="writing-vertical text-xl md:mr-5 font-bold text-gray-600">
      CATEGORIES
    </h1>
    <ul class="category">
      <li class="category-list" @click="setCategory('')">All</li>
      <template 
        v-for="(category, i) of categories" 
        :key="category">
          <li 
            :class="{
              'category-list' : true, 
              'border-none' : i === categories.length - 1
            }"
            @click="setCategory(category)"
          >
            {{ category }}
          </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()

    const categories = reactive([
      'Website',
      'Web Application',
      'Web Games',
      'Slicing Design'
    ])

    const setCategory = (category) => {
      store.commit('setCategory', category)
    }

    return {
      categories,
      setCategory
    }
  }
}
</script>

<style lang="postcss">
  .category {
    @apply flex flex-col my-5 w-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-sm
  }
  .category-list {
    @apply px-5 py-4 text-lg hover:bg-gray-800 cursor-pointer border-b border-gray-700 transition
  }
</style>