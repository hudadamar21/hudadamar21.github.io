<template>
  <div class="mb-8 flex flex-col lg:flex-row lg:items-center lg:tracking-tighter">
    <h1 class="lg:writing-vertical pl-2 tracking-widest lg:pl-0 text-xl lg:mr-5 font-bold lg:text-gray-600">
      CATEGORIES
    </h1>
    <ul class="category">
      <li class="category-list" @click="setCategory('')">All</li>
      <template 
        v-for="(category, i) of categories" 
        :key="category">
          <li 
            :class="['category-list', i === categories.length - 1 ? 'border-none' : false]"
            @click="setCategory(category)" >
              {{ category }}
          </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { setCategory } from "./portfolioStore";
export default {
  setup(){

    const categories = reactive([
      'Website',
      'Web Application',
      'Web Games',
      'Slicing Design'
    ])

    return {
      categories,
      setCategory
    }
  }
}
</script>

<style lang="postcss">
  .category {
    @apply flex flex-col my-2 lg:my-5 w-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-sm
  }
  .category-list {
    @apply px-5 py-4 text-lg hover:bg-gray-800 cursor-pointer border-b border-gray-700 transition
  }
</style>