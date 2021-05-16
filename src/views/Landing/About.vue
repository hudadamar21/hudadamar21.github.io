<template>
  <SectionLayout 
    title="About Me"
    :image="image"
    @showmore="openAboutPage"
  >
  <template #desc>
    <p class="text-base md:text-xl mt-2 mb-1 tracking-wider">Technologies and Programming is my Passion</p>
    <p class="text-base md:text-xl mb-3 tracking-wider opacity-70">Search A New Somethings</p>
  </template>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/SectionLayout.vue'
import image3d from "@/assets/images/3d_logo.png";

import { ref } from 'vue';
import { useRouter } from "vue-router";

export default {
  components: { SectionLayout },
  setup(){
    const image = ref(image3d)
    const router = useRouter()
    const openAboutPage = () => {
      router.push({ name: 'about' })
    }
    return {
      image,
      openAboutPage
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