<template>
  <LayoutPage title="PORTFOLIO">
    <div class="block lg:hidden fixed top-5 cursor-pointer right-5 z-[100]" @click="openOption">
      <div v-if="option" class="option">
        <!-- x -->
        <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div v-else class="option animate-spin-slow">
        <!-- adjustment -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class="relative md:pt-16 md:p-20 md:pr-5 flex flex-col lg:flex-row">
      <ul class="lg:pr-5 w-full md:w-[90%] lg:w-[55%]">
        <PortfolioList/>
      </ul>
      <div 
        class="bg-gray-900 lg:bg-transparent fixed lg:right-10 lg:top-5 lg:mt-0 px-3 md:px-0 md:ml-5 lg:p-5 w-full md:w-[30%] lg:w-[40%] self-start z-50 py-10 transition-all duration-300"
        :class="option ? 'top-0' : '-top-full'"
      >
        <Categories/>
        <Tags/>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
import { ref, watch } from 'vue';
import { state } from "./portfolioStore";

import LayoutPage from '@/layouts/Page.vue'
import PortfolioList from './PortfolioList.vue';
import Categories from './Categories.vue';
import Tags from './Tags.vue';

export default {
  components: { LayoutPage, PortfolioList, Categories, Tags },
  setup(){
    const option = ref(false)

    const openOption = () => {
      option.value = !option.value
    }
    
    watch(state, () => {
      openOption()
    })

    return {
      option,
      openOption
    }
  }
}
</script>

<style lang="postcss" scoped>
  .option {
    @apply p-2 rounded-full bg-gray-700
  }
</style>