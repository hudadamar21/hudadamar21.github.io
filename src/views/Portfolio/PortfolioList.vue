<template>
  <div 
    v-if="filteredPortfilios.length === 0"
    class="text-center text-xl text-gray-200"
  > Tidak ada Content
  </div>
  <div
    v-else
    v-for="(portfolio, i) of filteredPortfilios" 
    :key="i" 
    class="w-full pb-5"
    >
    <div class="bg-gradient-to-br from-gray-700 to-gray-800 md:rounded" data-aos="fade-up">
      <!-- title and tags -->
      <div class="p-4">
        <h1 class="text-3xl md:text-4xl border-gray-600 font-semibold tracking-wider mb-2">
          {{ portfolio.title }}
        </h1>
        <p class="text-gray-300 pl-1">{{ portfolio.category }}</p>
        
      </div>

      <!-- image -->
      <div class="w-full bg-gray-500 overflow-hidden">
        <img 
          :src="portfolio.image" 
          class="object-cover w-full object-center" 
          alt="portfolio image"
        />
      </div>

      <!-- techs -->
      <div class="px-5 pt-3 pb-6">
        <p class="flex gap-2 mb-3">
          <span 
            v-for="tech of portfolio.techs" 
            :key="tech" 
            class="rounded cursor-pointer transition bg-gray-800 hover:bg-gray-900"
          >
            <ripple-button size="sm" backlight="none" @click="setTag(tech)">
              {{ tech }}
            </ripple-button>
          </span>
        </p>
        <p class="text-sm md:text-base text-gray-100 mb-5 tracking-wide leading-relaxed">
          {{ portfolio.desc }}
        </p>
        <div class="flex items-center justify-end pt-2 gap-3">
            <a :href="portfolio.repoUrl" target="_blank"> 
              <RippleButton class="bg-green-700 hover:bg-green-800" backlight='none'>
                Github
              </RippleButton>
            </a>
            <a :href="portfolio.demoUrl" target="_blank"> 
              <RippleButton class="bg-blue-700 hover:bg-blue-800" backlight='none'>
                Demo
              </RippleButton>
            </a>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portfolioData from "@/data/portfolios";
import RippleButton from '@/components/RippleButton.vue';
import { useStore } from 'vuex';
import { computed, watch, reactive, ref, onMounted } from 'vue';
export default {
  components: { RippleButton },
  setup(){

    onMounted(() => {
      window.scrollY =0
    })

    const store = useStore()

    const portfolios = reactive(portfolioData)

    const category = computed(() => store.state.category)
    const tag = computed(() => store.state.tag)

    const filteredPortfilios = ref(portfolios)

    const filteredByCategory = () => {
      return portfolios.filter(pf => {
        return category.value == '' ? true : pf.category === category.value
      })
    }

    const filteredByTag = () => {
      return portfolios.filter(pf => {
        return tag.value == '' ? true : pf.techs.includes(tag.value)
      })
    }

    const setTag = (value) => {
      store.commit('setTag', value)
    }

    watch(category, () => filteredPortfilios.value = filteredByCategory())
    watch(tag, () => filteredPortfilios.value = filteredByTag())

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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>