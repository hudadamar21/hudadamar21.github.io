<template>
  <div ref="card" class="card group relative base-border-color base-bg-color overflow-hidden m-3" 
       @mouseenter="triggerAnimationHover"
       @mouseleave="triggerAnimationHover">
    <span :ref="`span_${data.id}`" class="bg-red-600"></span>
    <div class="flex flex-col justify-center items-center relative">
      <img :src="data.image" class="object-cover w-full image-height">
      <p class="text-xl absolute bottom-8 font-semibold base-border-color base-text-color bg-red-600 dark:bg-white px-3 py-1">{{data.title}}</p>
    </div>

    <div class="absolute-center opacity-0 group-hover:opacity-100 z-10 transition duration-300 delay-400 w-full h-full px-5">
      <div class="flex justify-between items-center flex-col items-between h-full pt-5 pb-8 text-gray-100">
        <div class="flex justify-center flex-col items-center">
          <h3 class="text-2xl font-semibold">{{ data.title }}</h3>
          <strong >[
            <template v-for="(teknologi, index) in data.detail.teknologi">
              <template v-if="index === data.detail.teknologi.length - 1">
                {{ teknologi }}
              </template>
              <template v-else>
                {{ teknologi }},  
              </template>
            </template>
            ]
          </strong>
        </div>
        <div class="my-2 overflow-auto" v-html="data.detail.desc"></div>
        <a :href="data.detail.link" target="_blank" class="base-button text-white hover:text-red-600 bg-red-600 hover:bg-white border border-1 border-white font-semibold">Open demo in new tab</a>
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
import {onMounted, ref, reactive} from 'vue';
export default {
  props: {
    image: String,
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    triggerAnimationHover(e){

      const span = this.$refs[`span_${this.data.id}`]

      this.$refs[`span_${this.data.id}`].style.top =  e.offsetY+'px'
      this.$refs[`span_${this.data.id}`].style.left =  e.offsetX+'px'
    }
  }
}
</script>

<style lang="postcss">
  .image-height {
    height: 420px;
  }
  .card{
    height: 420px;

  }
  .card span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 1;
    transition: width 0.5s, height 0.5s;
  }

  .card:hover span {
    width: 1500px;
    height: 1500px;
  }
</style>