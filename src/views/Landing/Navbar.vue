<template>
  <nav class="fixed top-0 left-0 w-full h-12 md:h-16 text-white z-50 transition duration-300 no-backdrop" :class="navbg">
    <ul class="flex items-center justify-center md:justify-end md:pr-32 gap-10 w-full h-full">
      <li class="text-base md:text-lg cursor-pointer" :class="listHover">
        <a href="#Home">Home</a>
      </li>
      <li class="text-base md:text-lg cursor-pointer" :class="listHover">
        <a href="#About Me">About</a>
      </li>
      <li class="text-base md:text-lg cursor-pointer" :class="listHover">
        <a href="#Portfolio">Portfolio</a>
      </li>
      <li class="text-base md:text-lg cursor-pointer" :class="listHover">
        <a href="#Contact">Contact</a>
      </li>
    </ul>
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
        navbg.value = 'backdrop-filter backdrop-blur-0'
        listHover.value = 'hover:text-yellow-400'

      // jika scroll bukan paling atas atau bawah
      } else if (window.scrollY > 150) {
        navbg.value = 'bg-black bg-opacity-10 backdrop-filter backdrop-blur-md'
        listHover.value = 'hover:text-gray-400'

      // jika scroll paling atas
      } else {
        navbg.value = 'backdrop-filter backdrop-blur-0'
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