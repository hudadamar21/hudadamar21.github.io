<template>
  <SectionPage :name="title" class="relative overflow-hidden">
    <!-- some design -->
    <img src="@/assets/images/stars.png" class="absolute w-full h-screen opacity-30 z-10"/>
    <div v-show="endSection" class="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-b from-transparent to-gray-900"></div>
    <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 place-items-center h-screen px-5 md:px-20">
      <div class="justify-self-start z-10" data-aos="fade-right">
        <h1 class="text-4xl md:text-7xl uppercase font-semibold">{{ title }}</h1>
        <div class="w-full h-1 md:h-2 bg-gray-600 mt-2"></div>
        <div class="w-2/3 h-1 md:h-2 bg-gray-500 mt-2"></div>
        <slot name="desc"></slot>
        <RippleButton lg @click="$emit('showmore')">
          Show more
        </RippleButton>
      </div>
      <div class="grid place-items-center w-full h-full relative" data-aos="fade-left">
        <div class="absolute w-3/5 h-2/3 bg-gray-800 rounded-xl z-1"></div>
        <div class="card-portfolio  absolute transform -translate-x-8 -translate-y-8 w-3/5 h-2/3 bg-gray-800 rounded-xl overflow-hidden">
          <div class=" w-full h-full transition transform overflow-hidden">
            <img :src="image" alt="image" class="object-cover w-full h-full grayscale-80">
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/stars.png" class="absolute w-full h-screen opacity-40"/>
  </SectionPage>
</template>

<script>
import SectionPage from "@/components/SectionPage.vue";
import RippleButton from "@/components/RippleButton.vue";

export default {
  components: {
    SectionPage,
    RippleButton
  },
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    endSection: { type: Boolean}
  }
}
</script>

<style lang="postcss">

</style>