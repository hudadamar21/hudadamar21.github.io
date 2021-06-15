<template>
  <div v-if="loaded" class="fixed inset-0 bg-black text-white grid place-items-center text-6xl">
    <div class="planet bg-black w-52 h-52 rounded-full right z-20 grid place-items-center">
    </div>
    <div class="stars absolute w-full h-screen opacity-50 z-10"></div>
  </div>
  <section v-else id="landing-page" class="mandatory-y">
    <Navbar/>
    <Home />
    <About />
    <Quote quoteFrom="- motto">
      <p class="text-4xl md:text-7xl font-bold text-gray-200 uppercase">Search a new somethings</p>
    </Quote>
    <Portfolio />
    <div class="relative">
      <Quote quoteFrom="- lazy man">
        <p class="text-4xl md:text-6xl font-bold text-gray-200 uppercase">
          Do it quickly until it's finished, and then you can relax longer and more relaxed
        </p>
      </Quote>
      <div class="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-b from-transparent to-gray-900"></div>
    </div>
    <Contact/>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';

import Quote from "@/components/Quote.vue";

import Home from "@/views/Landing/Home/index.vue";
import Portfolio from "@/views/Landing/Portfolio.vue";
import Contact from "@/views/Landing/Contact/Contact.vue";
import Navbar from "@/views/Landing/Navbar.vue";
import About from "@/views/Landing/About.vue";

export default {
  components: {
    Quote,
    Navbar,
    Home,
    About,
    Portfolio,
    Contact
  },
  setup(){
    const loaded = ref(true)

    onMounted(() => {
      loaded.value = false
    })

    return {
      loaded
    }
  }
}
</script>

<style scoped>
  .planet {
    animation: planet-rotate 5s linear infinite;
  }
  .stars {
    background-image: url('@/assets/images/stars.png');
    background-size: contain;
    opacity: .4;
    background-repeat: repeat;
    animation: stars 10s linear infinite;
  }

  @keyframes stars {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 2049px 0;
    }
  }
</style>
