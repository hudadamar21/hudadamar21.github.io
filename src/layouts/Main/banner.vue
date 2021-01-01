<template>
  <section id="banner" class="banner-section relative" >
    <Particles v-if="showParticles" class="absolute top-0 left-0 h-screen w-full"
      id="tsparticles"
      :options="particles_options"
    /> 
   <div class="z-10 text-center">
     <h1 class="text-3xl md:text-7xl base-text-color">
        My name is
        <span class="font-extrabold text-white ">Huda Damar</span>
      </h1>
      <h3 class="text-xl md:text-3xl mt-3 base-text-color">
        <span class="text-white">i'm a Web Developers </span> 
        [ "Front-end" , "Back-end" ]
      </h3>
   </div>
  </section>
</template>

<script>

import {ref, reactive, watch, onMounted, computed} from 'vue';
import {useStore} from "vuex"

export default {
  setup(){

    const store = useStore()

    const particles_options = ref(store.state.particlesOptions)

    const showParticles = computed(() => store.state.particlesOptions.show)

    watch(particles_options.value, (newval) => {
      particles_options.value = newval
    })

    return {
      particles_options: particles_options.value,
      showParticles
    }
  }
}
</script>

<style lang="postcss">
  #banner{ 
    @apply min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-bl to-red-500 from-red-600 dark:to-black dark:from-gray-900
  }
</style>