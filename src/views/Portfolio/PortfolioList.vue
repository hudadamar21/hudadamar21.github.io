<template>
  <transition name="switch" mode="out-in">
    <div v-if="filteredPortfilios.length">
      <transition-group 
        tag="ul" name="list" appear class="w-full relative space-y-10">
        <PortfolioCard 
          v-for="portfolio of filteredPortfilios" 
          :key="portfolio.title"
          :portfolio="portfolio" 
        />
      </transition-group>
    </div>
    <div v-else class="text-center text-xl text-gray-200">
      Tidak ada Content
    </div>
  </transition>      
</template>

<script>
import { watch, reactive, ref, computed } from 'vue';
import { state, setTag } from "./portfolioStore";

import PortfolioCard from './PortfolioCard.vue';
import portfolioData from "@/data/portfolios";
export default {
  components: { PortfolioCard },
  setup(){
    const portfolios = reactive(portfolioData)
    const filteredPortfilios = ref(portfolios.reverse())
    const category = computed(() => state.category)
    const tag = computed(() => state.tag)

    const filteredByCategory = () => 
      portfolios.filter(pf => category.value == '' ? true : pf.category === category.value)

    const filteredByTag = () => 
      portfolios.filter(pf => tag.value == '' ? true : pf.techs.includes(tag.value))

    watch(category, () => {
      window.scrollTo({ top: 0 })
      filteredPortfilios.value = filteredByCategory()
    })
    watch(tag, () => {
      window.scrollTo({ top: 0 })
      filteredPortfilios.value = filteredByTag()
    })

    console.log(filteredPortfilios);

    return {
      filteredPortfilios,
      setTag
    }
  }
}
</script>

<style lang="postcss">
  .portfolio-button {
    @apply px-3 py-2 rounded  hover:bg-opacity-70 focus:ring 
  }
  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: scale(0.6) translateY(100px);
  }

  .list-enter-active {
    transition: all 0.4s ease; 
  }

  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute;
  }
  .list-move {
    transition: all 0.3s ease-in;
  }

  /* switch transition */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px)
  }

  .switch-enter-active, .switch-leave-active {
    transition: all 0.4s ease;
  }
</style>