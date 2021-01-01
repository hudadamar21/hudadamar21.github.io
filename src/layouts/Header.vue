<template>
  <div class="fixed top-0 right-0 p-5 z-20 md:w-full flex justify-end items-start md:items-center transition-colors duration-200"
       :class="`${background} ${showMenu ? 'pl-16 md:pl-5' : ''}` ">
    <ul class="md:flex flex-col md:flex-row justify-center items-center pr-5 md:pr-0 md:gap-5 md:shadow-none"
        :class="showMenu ? 'flex' : 'hidden'">
      <li class="menu-list">
        <a href="#banner">Home</a>
      </li>
      <li class="menu-list">
        <a href="#about">About</a>
      </li>
      <li class="menu-list">
        <a href="#portfolio">Portfolio</a>
      </li>
      <li class="menu-list">
        <a href="#contact">Contact</a>
      </li>
      <li>
        <button @click="setMode" class="focus:outline-none px-2 py-1 mt-2 md:mt-0 border base-border-color base-text-color base-hover-button transition duration-75">{{ isDark ? 'toLight' : 'toDark' }}</button>
      </li>
    </ul>
    <div class="menu-toggle flex md:hidden base-text-color base-bg-color" @click="setShowMenu">
      <svg v-if="!showMenu" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
  </div>
</template>

<script>

import { computed, onMounted, ref, watchEffect } from 'vue'
import { useStore } from "vuex"

export default {
  setup(_, context){

    const store = useStore()

    const isDark = ref(false)

    const showMenu = ref(false)

    const scrollTop = ref(document.body.scrollTop)

    const background = computed(() => {
      if(scrollTop.value == 0) {
        return 'bg-transparent'
      } else {
        return showMenu.value ? 'bg-red-500 dark:bg-gray-900 shadow-md' : 'bg-transparent md:bg-red-500 md:dark:bg-gray-900'
      }
    })

    watchEffect(() => {
      window.onscroll = () => {
        scrollTop.value = window.scrollY
      }
    })

    onMounted(() => {
      const currentMode = localStorage.getItem('isDark')
      isDark.value = currentMode === 'true' ? true : false

      localStorage.getItem('isDark') === 'true' 
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')
    })

    const setMode = () => {
      isDark.value = !isDark.value
      localStorage.setItem('isDark', isDark.value)
      
       if(localStorage.isDark === 'true') {
        document.body.classList.add('dark')
        store.commit('particlesOptions/CHANGE_COLOR', "#ff0000", {root: true})
        reRenderParticles()
       } else {
        document.body.classList.remove('dark')
        store.commit('particlesOptions/CHANGE_COLOR', "#ffffff", {root: true})
        reRenderParticles()
       }
    }

    const reRenderParticles = () =>{
      store.commit('particlesOptions/SET_SHOW', false, {root: true})
      setTimeout(function () {
        store.commit('particlesOptions/SET_SHOW', true, {root: true})
      }, 0)
    }

    const setShowMenu = () => {
      showMenu.value = !showMenu.value
    }
    return {
      isDark,
      setMode,
      background,
      showMenu,
      setShowMenu
    }
  }
}
</script>

<style lang="postcss">
  .menu-list{
    clip-path: polygon(4% 15%, 100% 0%, 96% 88%, 0% 100%);
    @apply py-1 px-2 text-white dark:text-red-500 text-xl font-bold hover:bg-red-700 dark:hover:bg-red-500 dark:hover:text-black hover:text-white cursor-pointer transition duration-200
  }
  .menu-toggle{
    @apply  w-8 h-8 justify-center items-center text-xl cursor-pointer
  }
</style>