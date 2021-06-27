<template>
  <section ref="home" id="Home" class="section-home bg-gradient-radial-to-br from-gray-700 to-black transition-all duration-1000 overflow-hidden">
    <!-- some design -->
    <img src="@/assets/images/stars.png" alt="stars" class="absolute w-full h-screen opacity-30"/>
    <Intro />
    <Moon/>
  </section>
</template>

<script>
import Moon from '@/components/Moon.vue';
import Intro from "./Intro.vue";

export default {
  components: {
    Intro,
    Moon,
  },
}
</script>

<style lang="postcss">
.section-home {
  @apply relative h-screen w-full;
}
</style>
