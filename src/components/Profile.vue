<template>
  <section id="profile" class="relative text-center flex justify-center items-center flex-col w-full">
    <h3 class="base-text-color text-2xl md:text-3xl font-bold mb-5">Profile</h3>
    <div class="profile base-bg-color base-border-color">
      <div class="w-full md:w-3/12 md:h-full base-bg-color md:border-r md:border-white md:dark:border-red-500">
        <img :src="image" class="w-full h-64 md:h-auto object-contain profile-image-height">
      </div>
      <div class="w-full md:w-1/2 justify-center md:justify-start flex base-text-color p-5 md:pl-10 text-sm md:text-xl">
        <div class="w-3/12">
          <ul  class="flex flex-col items-start font-extrabold">
            <li class="capitalize leading-loose" v-for="(value, key) in profiles" :key="key">{{key}}</li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col items-start font-semibold">
            <li class="leading-loose " v-for="(value, key) in profiles" :key="key">: &nbsp; &nbsp; {{value}}</li>
          </ul>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>

import {profile} from '../data/profile';
import profile_image from '../assets/images/profileImage.jpg';
import { onMounted ,ref} from 'vue';

export default {
  setup(){
    const profiles = ref(profile)
    const image = ref(profile_image)
    return {
      profiles,
      image
    }
  }
}
</script>

<style lang="postcss">
  .profile {
    @apply flex flex-col items-center md:flex-row items-start shadow border
  }
</style>  