<template>
  <LayoutSection 
    title="About Me"
    id="About"
    :image="image"
    @showmore="openAboutPage"
    topShading
  >
  <template #desc>
    <p class="tracking-widest leading-relaxed">
      Technologies and Programming is my Passion
    </p>
  </template>
  </LayoutSection>
</template>

<script>
import LayoutSection from '@/layouts/Section.vue'
import about_image from "@/assets/images/about_image.jpg";

import { ref } from 'vue';
import { useRouter } from "vue-router";

export default {
  components: { LayoutSection },
  setup(){
    const image = ref(about_image)
    const router = useRouter()
    const openAboutPage = () => {
      router.push({ name: 'about' })
    }

    const onIntersectionElement = (value) => {
      console.log('about interaction', value)
    }

    return {
      image,
      openAboutPage,
      onIntersectionElement
    }
  }
}
</script>

<style>
.size-35 {
  width: 35rem;
  height: 35rem;
}
</style>