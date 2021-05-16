<template>
  <!-- sun -->
  <div ref="sun" class="absolute bottom-20 w-48 h-48 left-1/2 transform -translate-x-1/2 rounded-full bg-yellow-200 backlight-sun transition"></div>

  <!-- sea -->
  <div ref="sea" class="absolute bottom-0 left-0 h-48 w-full bg-gradient-radial-to-b from-yellow-500 to-yellow-700 backlight-sea transition"></div>

  <!-- beach siluet -->
  <div ref="beach" class="absolute bottom-0 left-0 h-24 w-full bg-black flex transition">

    <!-- grass -->
    <div class="flex items-end absolute bottom-full left-0 overflow-hidden">
      <img v-for="grass in 10" :key="grass" src="@/assets/images/grass.webp" class="pt-10" width="280">

      <div class="absolute bottom-0 left-0 flex items-end justify-between w-full">
        <div class="flex items-end">
          <img 
            v-for="grass2 in 3" 
            :key="grass2" 
            src="@/assets/images/grass2.webp" 
            width="90"
            :class="{'rotate-x-full' : grass2 % 2 === 0}"
          >
        </div>
        <div class="flex items-end justify-between w-1/2">
          <img 
            v-for="grass2 in 5" 
            :key="grass2" 
            src="@/assets/images/grass2.webp" 
            width="90"
            :class="{'rotate-x-full' : grass2 % 2 === 0}"
          >
        </div>
        <div class="flex items-end">
          <img 
            v-for="grass2 in 3" 
            :key="grass2" 
            src="@/assets/images/grass2.webp" 
            width="90"
            :class="{'rotate-x-full' : grass2 % 2 === 0}"
          >
        </div>
      </div>
    </div>

    <div class="absolute -left-24 bottom-full">
      <img src="@/assets/images/palm.webp" class="w-96" alt="">
    </div>

    <div class="absolute -right-24 bottom-full rotate-x-full">
      <img src="@/assets/images/palm.webp" class="w-96" alt="">
    </div>


    <!-- message -->
    <div @click="$emit('opencontact')" class="absolute bottom-12 right-20 w-14 h-8 cursor-pointer text-yellow-600 hover:text-yellow-500 animate-bounce">
      <svg viewBox="0 0 202.839 202.839" fill="currentColor">
        <path d="M185.502,31.815H17.336C7.776,31.815,0,39.592,0,49.152v104.536c0,9.56,7.776,17.336,17.336,17.336h168.166
        c9.56,0,17.337-7.777,17.337-17.336V49.152C202.839,39.592,195.062,31.815,185.502,31.815z M186.759,147.492
        c2.227,1.634,2.707,4.763,1.073,6.989c-0.979,1.335-2.497,2.042-4.035,2.042c-1.027,0-2.063-0.315-2.954-0.969l-65.51-48.072
        l-10.962,8.002c-0.878,0.641-1.913,0.961-2.948,0.961c-1.031,0-2.063-0.318-2.938-0.955l-11.029-8.013l-65.271,47.897
        c-0.892,0.654-1.927,0.969-2.954,0.969c-1.538,0-3.056-0.708-4.035-2.042c-1.634-2.226-1.153-5.355,1.073-6.989l62.694-46.005
        L16.287,55.776c-2.234-1.623-2.729-4.75-1.106-6.984c1.623-2.233,4.75-2.728,6.983-1.106l79.252,57.576l79.437-57.984
        c2.23-1.628,5.358-1.14,6.986,1.091c1.629,2.23,1.141,5.358-1.09,6.986l-62.942,45.943L186.759,147.492z"/>
      </svg>
    </div>

    <div class="text-yellow-600 h-full flex flex-col justify-center pl-10">
      <p>hudadamar21@gmail.com</p>
      <p>copyright@2021. hudadamar21</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['opencontact'],
  setup(){

    const sun = ref('')
    const sea = ref('')
    const beach = ref('')

    window.document.body.onscroll = () => {

      const scrollHeight = window.document.body.scrollHeight
      const scrollY = window.scrollY + window.innerHeight
      const value = scrollHeight - scrollY

      // jika scrollY nya tinggal 300
      if (value < 300) {
        sun.value.style.bottom = 96 - (value * 0.3) + 'px'
        sea.value.style.height = Math.floor((value * 0.1) + 192) + 'px'
        beach.value.style.height = Math.floor((value * 0.55) + 96) + 'px'
        console.log('sea height',Math.floor((value * 0.1) + 192) + 'px')
        console.log('beach height',Math.floor((value * 0.55) + 96) + 'px')
      }
    }

    return {
      sun,
      sea,
      beach
    }
  }
}
</script>

<style>
.rotate-x-full {
  transform: rotateY(180deg);
}
.backlight-sun {
  box-shadow: 0 0 100px 60px rgba(255, 140, 32, 0.808);
}
.backlight-sea {
  box-shadow: 0 0 30px 1px rgba(255, 166, 0, 0.781);
}
</style>