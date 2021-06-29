<template>
  <nav class="fixed top-0 left-0 w-full h-12 md:h-16 text-white z-50 transition duration-300 no-backdrop flex items-center justify-center md:justify-end md:pr-32 gap-10 w-full h-full" :class="navbg">
    <ul class="relative flex items-center gap-10 ">
      <li ref="marker" id="marker"></li>
      <li v-for="list of navlist" :key="list" >
        <a 
          @click.self="onIndicatorMove($event)" 
          :href="`#${list}`"
          class="relative group text-base md:text-lg cursor-pointer"
          :class="listHover"
        >
          {{ list }}
        </a>
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
    const marker = ref('')
    const navlist = ref([
      'Home',
      'About Me',
      'Portfolio',
      'Contact'
    ])

    const onIndicatorMove = (e) => {
      console.log("Left",e.target.offsetLeft)
      console.log("Width",e.target.offsetWidth)
      console.log(marker.value.style)
      marker.value.style.left = e.target.offsetLeft+"px";
      marker.value.style.width = e.target.offsetWidth+"px";
    }

    window.addEventListener('scroll',function () {
      // jika scroll paling bawah
      if (window.document.body.scrollHeight < window.scrollY + 1000) {
        navbg.value = 'backdrop-filter backdrop-blur-0'
        listHover.value = 'hover:text-yellow-400'
        marker.value.classList.remove('bg-gray-600')
        marker.value.classList.add('bg-black')


      // jika scroll bukan paling atas atau bawah
      } else if (window.scrollY > 150) {
        navbg.value = 'bg-black bg-opacity-10 backdrop-filter backdrop-blur-md'
        listHover.value = 'hover:text-gray-100'
        marker.value.classList.remove('bg-black')
        marker.value.classList.add('bg-gray-600')


      // jika scroll paling atas
      } else {
        navbg.value = 'backdrop-filter backdrop-blur-0'
        listHover.value = 'hover:text-gray-100'
        marker.value.classList.remove('bg-black')
        marker.value.classList.add('bg-gray-600')

      }
    });

    return {
      navlist,
      navbg,
      listHover,
      marker,
      onIndicatorMove
    }
  }
}
</script>

<style lang="postcss">
  .no-backdrop {
    backdrop-filter: blur(0);
  }
  .backdrop {
    backdrop-filter: blur(10px);
  }
  #marker {
    @apply absolute bottom-0 h-4 transition-all duration-500 z-[-1]
  }

  @media screen and (max-width: 860px) {
    .backdrop {
      backdrop-filter: blur(0);
    }
  }
</style>