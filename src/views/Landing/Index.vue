<template>
  <section id="landing-page" class="mandatory-y">
    <Navbar v-cloak/>
    <Home v-cloak />
    <About v-cloak />
    <Quote quoteFrom="- motto" v-cloak>
      <p class="text-4xl md:text-7xl font-bold text-white uppercase">Search a new somethings</p>
      <div class="blackhole bg-black w-[5rem] md:w-[10rem] h-[5rem] md:h-[10rem] absolute -top-12 right-10 md:right-0 rounded-full z-[-20]"></div>
    </Quote>
    <Portfolio v-cloak />
    <div class="relative bg-gradient-to-b from-transparent to-gray-900" v-cloak>
      <Quote class="relative z-10" quoteFrom="- lazy man">
        <div class="w-max text-white">
          <p class="text-4xl md:text-7xl font-black uppercase">
            Do it quickly
          </p>
          <p class="text-4xl md:text-6xl font-bold uppercase">
            until it's finished,
          </p>
          <p class="py-2 flex items-center text-2xl md:text-4xl text-gray-400 font-bold uppercase">
            and then
            <span class="flex-grow h-3 ml-3 bg-gray-400"></span>
          </p>
          <p class="text-3xl md:text-5xl font-bold uppercase">you can relax longer</p>
          <p class="text-3xl md:text-5xl font-bold uppercase">and more relaxed</p>
        </div>
      </Quote>
      
      
    </div>
    <Contact v-cloak/>
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

<style lang="postcss" scoped>
  .blackhole {
    box-shadow: 0 0 80px 5px rgba(255, 255, 255, 0.411);
    animation: blackhole 10s linear infinite alternate;
    transform: translate( 0, 0);
  }

  @keyframes blackhole {
    0% {
      box-shadow: 0 0 80px 5px rgba(255, 255, 255, 0.411);
      transform: translate( 0, 0);
    }
    100% {
      box-shadow: 0 0 150px 5px rgba(255, 255, 255, 0.411);
      transform: translate( 15px, 15px);
    }
  }
  [v-cloak] {
    display: none;
  }
  
</style>
