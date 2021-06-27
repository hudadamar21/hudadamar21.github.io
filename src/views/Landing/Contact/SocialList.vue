<template>
  <div class="relative overflow-hidden flex flex-col items-start justify-center bg-white bg-opacity-20 flex-grow p-5 gap-3 rounded w-full md:w-auto">
    <div 
      v-for="social in social_list" 
      :key="social.name" 
      class="flex items-center gap-2 text-white px-3 py-2 transition-none hover:bg-white hover:bg-opacity-20 rounded cursor-pointer">
        <div v-html="social.icon"></div>
        <a :href="social.url" target="_blank" rel="noreferrer">{{ social.name }}</a>
    </div>
    <div class="absolute top-full right-0 w-2/3 h-700px bg-white bg-opacity-10 transform -translate-y-1/2 rotate-45"></div>
  </div>
</template>

<script>
import social_list from "@/data/social_list";
export default {
  setup(){
    return {
      social_list
    }
  }
}
</script>

<style>
 .h-700px {
   height: 700px;
 }
</style>