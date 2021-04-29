<template>
  <transition name="fade">
    <div v-if="popup.show" class="fixed top-0 left-0 bottom-0 right-0 z-50 bg-popup flex justify-center items-center flex-col">
      
      <h3 class="base-text-color font-bold text-3xl mb-3">{{ popup.title }}</h3>
      <div class="relative bg-gray-800 shadow-lg base-border-color w-11/12 md:w-8/12 h-3/4">
        <button class="base-button-primary absolute -top-10 right-0" @click="popup.show = false">X</button>
        <div class="flex justify-center items-center p-2 flex-wrap overflow-auto w-full h-full">
          <template v-for="(data, index) in popup.data" :key="index">
            <div  class="p-3 m-1 md:m-3 base-bg-color flex flex-col justify-center items-center base-border-color">
              <div class="w-32 md:w-40 h-32 md:h-40 p-3">
                <img :src="data.image" class="object-contain w-full h-full">
              </div>
              <h3 class="text-xl font-semibold leading-relaxed base-text-color">{{ data.name }}</h3>
            </div>
          </template>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      popup: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .bg-popup {
    background: rgba(0,0,0,0.7);
  }
</style>