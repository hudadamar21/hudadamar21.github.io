<template>
  <LayoutPage title="ABOUT">
    <div class="relative md:pt-16 md:p-20 md:pr-5">
      <div class="flex flex-col md:flex-row justify-center items-center">
        <img :src="profile_image" class="h-80 w-72 object-cover rounded bg-gray-700 md:mr-10 filter brightness-[80%] grayscale-[10%]" alt="profile image">
        <div class="w-[90%] md:w-[60%] mt-10 md:mt-0 text-center md:text-left">
          <p class="text-base md:text-lg mb-5 text-center md:text-left">
            Hello, Nama saya <strong>Nurhuda Damarmoyo</strong>.<br> Fresh graduate dari <strong>Universitas Bina Sarana Informatika, Bogor</strong>. <br>
            Saya adalah seorang yang teliti, suka belajar hal baru dan cepat memahami , dengan kelebihan ini saya mengasah kemampuan saya dalam bidang pemrogramman sebagai Frontend Web Developer.
          </p>
          <div class="flex items-center justify-center md:justify-start flex-wrap gap-3">
            <RippleButton>Cerificates</RippleButton>
            <router-link to="/portfolio">
              <RippleButton >Portfolios</RippleButton>
            </router-link>
            <RippleButton>Curicullum Vitae</RippleButton>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row h-full px-5 lg:px-20 mt-20">
        <div class="w-[95%] lg:w-1/2">
          <Skills/>
        </div>
        <div class="w-[95%] lg:w-1/2 mt-10 lg:mt-0">
          <Experience/>
        </div>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from '@/layouts/Page.vue'
import RippleButton from '@/components/RippleButton.vue'
import profile_image from "@/assets/images/profileimage.jpg";

import Skills from "./Skills.vue";
import Experience from "./Experience.vue";

export default {
  components: { 
    LayoutPage, 
    RippleButton,
    Skills,
    Experience
  },
  setup(){
    return {
      profile_image
    }
  }
}
</script>

<style>

</style>