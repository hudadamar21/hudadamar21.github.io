<template>
  <section ref="home" id="Home" class="section-home bg-gradient-radial-to-br from-gray-700 to-black transition-all duration-1000 overflow-hidden">
    <!-- some design -->
    <img src="@/assets/images/stars.png" class="absolute w-full h-screen opacity-50 z-10"/>
    <div class="bg-black w-48 md:w-56 h-48 md:h-56 absolute -top-20 -left-20 rounded-full planet z-20"></div>
    <div class="bg-black w-48 md:w-64 h-48 md:h-64 absolute top-1/3 transform -translate-y-1/2 -right-32 rounded-full planet right z-20"></div>

    <div ref="section" class="relative w-full h-full flex flex-col-reverse md:flex-row hidden pt-14 md:pt-0 z-30">
      <Intro />
      <CardImage />
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

import Intro from "./Intro.vue";
import CardImage from "./CardImage.vue";

export default {
  components: {
    Intro,
    CardImage
  },
  setup(){
    const section = ref('')
    const home = ref('')
    onMounted(() => {
      section.value.classList.remove('hidden')
      setTimeout(() => home.value.classList.remove('opacity-0'), 800);
    })
    return { section, home }
  }
}


</script>

<style lang="postcss">
.section-home {
  @apply relative h-screen w-full;
}

.planet {
  position: relative;
  background-image: url('@/assets/images/moon-texture.webp');
  background-position: left;
  opacity: 0.7;
  box-shadow: 0 0 50px 10px rgba(255, 255, 255, 0.432);
  overflow: hidden;
  animation: planet-rotate 150s linear infinite;
}

.planet::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-transparent
}

.planet.right::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent to-black
}

@keyframes planet-rotate {
  to {
    background-position: right;
  }
}
</style>
