<template>
  <nav class="fixed top-0 left-0 w-full h-16 text-white z-50 transition duration-300 no-backdrop" :class="navbg">
    <ul class="hidden md:flex items-center justify-end pr-32 gap-10 w-full h-full">
      <li class="text-lg cursor-pointer" :class="listHover">
        <a href="#Home">Home</a>
      </li>
      <li class="text-lg cursor-pointer" :class="listHover">
        <a href="#About Me">About</a>
      </li>
      <li class="text-lg cursor-pointer" :class="listHover">
        <a href="#Portfolio">Portfolio</a>
      </li>
      <li class="text-lg cursor-pointer" :class="listHover">
        <a href="#Contact">Contact</a>
      </li>
    </ul>
    <div class="flex md:hidden p-3 justify-end">
      <div class="grid grid-rows-3 gap-1 hover:bg-gray-700 p-2 rounded cursor-pointer">
        <div class="h-1 w-5 bg-white"></div>
        <div class="h-1 w-5 bg-white"></div>
        <div class="h-1 w-5 bg-white"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const navbg = ref('')
    const listHover = ref('')
    window.addEventListener('scroll',function () {
      // jika scroll paling bawah
      if (window.document.body.scrollHeight < window.scrollY + 1000) {
        navbg.value = 'no-backdrop'
        listHover.value = 'hover:text-yellow-400'

      // jika scroll bukan paling atas atau bawah
      } else if (window.scrollY > 150) {
        navbg.value = 'bg-black bg-opacity-0 md:bg-opacity-10 backdrop'
        listHover.value = 'hover:text-gray-400'

      // jika scroll paling atas
      } else {
        navbg.value = 'no-backdrop'
        listHover.value = 'hover:text-gray-400'
      }
    });

    return {
      navbg,
      listHover
    }
  }
}
</script>

<style>
  .no-backdrop {
    backdrop-filter: blur(0);
  }
  .backdrop {
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 860px) {
    .backdrop {
    backdrop-filter: blur(0);
  }
  }
</style>