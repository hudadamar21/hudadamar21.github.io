<template>
  <section id="portfolio">
    <SectionTitle name="PORTFOLIO"/>
    <div class="flex justify-center items-center h-full">

      <div class="w-full">
        <Splide :options="options" @splide:moved="splideMoved">
          <SplideSlide v-for="pf of portfolio" :key="pf.id">
            <CardImage :data="pf"/>
          </SplideSlide>
        </Splide>
      </div>

    </div>
  </section>
</template>

<script>
import {reactive, ref} from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import CardImage from '../../components/CardImage.vue';
import SectionTitle from '../../components/SectionTitle.vue';

import {portfolios} from '../../data/portfolios';

export default {
  components: {
    Splide,
    SplideSlide,
    CardImage,
    SectionTitle
  },
  setup(){

    const splideIndex = ref(1)

    const state = reactive({
      portfolio: portfolios,
      options: {
        perPage: 3,
        breakpoints: {
          700: {
            perPage: 1,
            perMove  : 1
          },
          860: {
            perPage: 2,
            perMove  : 2
          }
        },
        easing   : 'ease',
        perMove  : 3
      }
    })

    const splideMoved = (newIndex, oldIndex) => {
      console.log(newIndex.index);
      console.log(oldIndex)
    }

    return {
      portfolio: state.portfolio,
      options: state.options,
      splideMoved
    }
  }
}
</script>

<style lang="postcss">
  #portfolio{
    @apply min-h-screen w-full bg-gray-900
  }
  .portfolio-control{
    @apply hover:bg-red-600 hover:text-white focus:outline-none 
    rounded-full p-2 transition duration-100 active:bg-red-800
  }
</style>