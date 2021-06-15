<template>
  <LayoutPage title="ABOUT">
    <div class="relative md:pt-16 md:p-20 md:pr-5">
      <div class="flex justify-center items-center">
        <img src="@/assets/images/profile.jpg" class="h-80 w-72 object-cover rounded bg-gray-700 mr-10" alt="">
        <div class="w-[60%]">
          <p class="text-lg mb-5">
            Hello, Nama saya <strong>Nurhuda Damarmoyo</strong>.<br> Fresh graduate dari <strong>Universitas Bina Sarana Informatika, Bogor</strong>. <br>
            Saya adalah seorang yang teliti, suka belajar hal baru dan cepat memahami , dengan kelebihan ini saya mengasah kemampuan saya dalam bidang pemrogramman sebagai Frontend Web Developer.
          </p>
          <RippleButton class="mr-3">Curicullum Vitae</RippleButton>
          <RippleButton>Cerificate</RippleButton>
        </div>
      </div>
      <div class="flex h-full px-20 mt-20">
        <div class="w-1/2">
          <Skills/>
        </div>
        <div class="w-1/2">
          <Experience/>
        </div>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from '@/layouts/page.vue'
import RippleButton from '@/components/RippleButton.vue'

import Skills from "./Skills.vue";
import Experience from "./Experience.vue";

export default {
  components: { 
    LayoutPage, 
    RippleButton,
    Skills,
    Experience
  },
}
</script>

<style>

</style>