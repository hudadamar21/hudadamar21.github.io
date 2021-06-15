<template>
  <LayoutSection 
    title="Portfolio"
    :image="image"
    @showmore="openPortfolioPage"
  >
  <template #desc>
    <p class="text-base md:text-xl my-1 tracking-wider">Portfolio Website, Web Application, and Web Games</p>
  </template>
  </LayoutSection>
</template>

<script>
import { useRouter } from "vue-router";

import image from "@/assets/images/portfolio_image.jpg";
import LayoutSection from '@/layouts/Section.vue';

export default {
  components: {
    LayoutSection,
  },
  data(){
    return {
      image
    }
  },
  setup(){
    const router = useRouter()

    const openPortfolioPage = () => {
      router.push({ name: 'portfolio' })
    }

    return {
      openPortfolioPage
    }
  },
}
</script>

<style lang="postcss">
.grayscale-80 {
  filter: grayscale(80%);
}
.size-35 {
  width: 35rem;
  height: 35rem;
}
</style>