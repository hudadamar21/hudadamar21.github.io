<template>
  <SectionLayout 
    title="Portfolio"
    :image="logo"
    @showmore="openPortfolioPage"
    endSection
  >
  <template #desc>
    <p class="text-base md:text-xl mt-2 mb-3 tracking-wider">Portfolio Website, Web Application, and Web Games</p>
  </template>
  </SectionLayout>
</template>

<script>
import SectionLayout from '@/components/SectionLayout.vue';
import logo from '@/assets/images/3d_logo.png'

import { useRouter } from "vue-router";

export default {
  components: {
    SectionLayout,
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
  data(){
    return {
      logo
    }
  }
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