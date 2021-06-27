<template>
  <li class="w-full pb-5">
    <div class="bg-gradient-to-br from-gray-700 to-gray-800 mx-3 rounded" data-aos="fade-up">
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
            <RippleButton size="sm" backlight="none" @click="setTag(tech)">
              {{ tech }}
            </RippleButton>
          </span>
        </p>
        <p class="text-sm md:text-base text-gray-100 mb-5 tracking-wide leading-relaxed">
          {{ portfolio.desc }}
        </p>
        <div class="flex items-center justify-end pt-2 gap-3">
            <a :href="portfolio.repoUrl" target="_blank" rel="norefferer"> 
              <RippleButton class="bg-green-700 hover:bg-green-800" backlight='none'>
                Github
              </RippleButton>
            </a>
            <a :href="portfolio.demoUrl" target="_blank" rel="norefferer"> 
              <RippleButton class="bg-blue-700 hover:bg-blue-800" backlight='none'>
                Demo
              </RippleButton>
            </a>  
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { setTag } from "./portfolioStore";

import RippleButton from '@/components/RippleButton.vue';
export default {
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  components: {
    RippleButton
  },
  setup(){
    return {
      setTag
    }
  }
}
</script>

<style>

</style>