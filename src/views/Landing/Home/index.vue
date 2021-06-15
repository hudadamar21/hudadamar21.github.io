<template>
  <section ref="home" id="Home" class="section-home bg-gradient-radial-to-br from-gray-700 to-black transition-all duration-1000 overflow-hidden">
    <!-- some design -->
    <img src="@/assets/images/stars.png" alt="stars" class="absolute w-full h-screen opacity-50"/>

    <Intro />
    <div class="planet bg-black w-[35rem] h-[35rem] md:mt-5 absolute top-1/2 transform -translate-y-1/2 -right-56 md:right-16 rounded-full right z-20"></div>
  </section>
</template>

<script>
import Intro from "./Intro.vue";

export default {
  components: {
    Intro,
  },
}


</script>

<style lang="postcss">
.section-home {
  @apply relative h-screen w-full;
}

.planet {
  position: relative;
  background-image: url('@/assets/images/moon_texture.jpg');
  background-size: cover;
  opacity: .65;
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
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1090px 0;
  }
}
</style>
