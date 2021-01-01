<template>
  <section id="about">
    <SectionTitle name="ABOUT"/>
    <div class="mt-3 relative">
      <p class="base-text-color hover:opacity-95 md:text-xl mx-3 md:mx-8 -mb-3 cursor-pointer" v-html="introduction" @click="langIsInggris = !langIsInggris"></p>
      <Splide :options="options">
        <SplideSlide>
          <Profile />
        </SplideSlide>
        <SplideSlide>
          <ListImage 
              :listitem="educations.slice(0,4)"
              :listcounts="educations.length"
              title="Educations" 
              class="px-5"
              @showall="showAll">
            <template #prefix>
              <div class="absolute -right-2 hidden md:block base-text-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
              </div>
            </template>
          </ListImage>
        </SplideSlide>
        <SplideSlide>
          <ListImage 
              :listitem="skills.slice(0,4)"
              :listcounts="skills.length"
              title="Skills" 
              class="px-5"
              @showall="showAll"/>
        </SplideSlide>
      </Splide>

      <Popup :popup="popup" />

    </div>
  </section>
</template>

<script>

import { reactive, ref, computed} from 'vue'

// Libraries
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Components
import {ListImage, CardImage, SectionTitle, Profile, Popup} from '../../components';

// Datas
import {educationsData} from '../../data/educations'
import {skillsData} from '../../data/skills'

export default {
  components: {
    Splide,
    SplideSlide,
    ListImage,
    Popup,
    SectionTitle,
    Profile
  },
  setup(){
    const educations = reactive(educationsData)
    const skills = reactive(skillsData)
    const options = reactive({
				  perPage: 1,
          gap    : '1rem',
          perMove: 1
			  },)

    const langIsInggris = ref('inggris')

    const introduction = computed(() => {
      const indonesia = `Hello, Nama saya <strong>Nurhuda Damarmoyo</strong>.<br> Fresh graduate dari <strong>Universitas Bina Sarana Informatika, Bogor</strong>. <br>
      Saya adalah seorang yang teliti, suka belajar hal baru dan cepat memahami , dengan kelebihan ini saya mengasah kemampuan saya dalam bidang pemrogramman sebagai web developer front-end dan back-end.`
      const inggris = `Hello, My name is <strong>Nurhuda Damarmoyo</strong>.<br> Fresh graduate from <strong>Universitas Bina Sarana Informatika, Bogor</strong>. <br>
      I was a conscientious one, love learning a new thing, and quickly understanding. with this advantages I sharpen my ability in the field of programming as a web development front-end and back-end.`

      return langIsInggris.value ? inggris : indonesia
    })

    const popup = reactive({
      show: false,
      title: null,
      data: {},
    })

    const showAll = target => {
      popup.show = !popup.show
      popup.title = target
      popup.data = target === 'Skills' ? skills 
                        : target === 'Educations' ? educations 
                        : {}
    }

    return {
      educations,
      skills,
      options,
      langIsInggris,
      introduction,
      showAll,
      popup,
    }
  }
}
</script>

<style lang="postcss">
  #about{
    @apply min-h-screen w-full bg-gradient-to-bl to-red-500 from-red-600 dark:to-black dark:from-gray-900
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>