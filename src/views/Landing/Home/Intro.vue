<template>
  <!-- intro -->
  <div class="absolute top-1/2 transform -translate-y-1/2 container-intro z-40">
    <!-- intro self -->
    <div class="lg:mb-4">
      <h1 ref="hello" class="text-xl md:text-3xl font-bold opacity-0 text-gray-300 tracking-widest transition duration-1000">
        HELLO<span class="inline md:hidden">, I AM</span>
      </h1>
      <div class="flex items-center gap-2">
        <h1 ref="iam" class="hidden md:block opacity-0 writing-vertical text-gray-300 text-center tracking-wider text-xl font-bold transition duration-1000">
          I<span class="mt-2">AM</span>
        </h1>
        <h1 ref="say_name" class="say-name opacity-0 transition duration-1000">
          HUDA DAMAR
        </h1>
      </div>
      <h1 ref="say_skills" class="say-skills opacity-0 my-2 text-gray-300 transition duration-1000 uppercase tracking-widest font-semibold">
         Front-end Web Developer
      </h1>
    </div>

    <!-- cv and cerificate -->
    <div ref="cv_certif" class="opacity-0 w-full flex items-center gap-3 transition duration-1000">
      <RippleButton>Curicullum Vitae</RippleButton>
      <RippleButton>
        <router-link to="/certificate">Cerificate</router-link>
      </RippleButton>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import RippleButton from '@/components/RippleButton.vue';

export default {
  components: {
    RippleButton
  },  
  setup(){
    const hello = ref('')
    const iam = ref('')
    const say_name = ref('')
    const say_skills = ref('')
    const cv_certif = ref('')
    onMounted(() => {
      opacityOnTimeout(hello, 500)
      opacityOnTimeout(iam, 800)
      opacityOnTimeout(say_name, 1200)
      opacityOnTimeout(say_skills, 1700)
      opacityOnTimeout(cv_certif, 2000)
    })

    const opacityOnTimeout = (ref, duration) => {
      setTimeout(() => {
        ref.value.style.opacity = "1"
      }, duration)
    }

    return {
      hello,
      iam,
      say_name,
      say_skills,
      cv_certif
    }
  }
}
</script>

<style lang="postcss">
.container-intro {
  @apply flex flex-col justify-start mt-5 md:mt-0 md:justify-center w-full h-1/2 md:h-full  pl-5 md:pl-20 leading-relaxed cursor-default;
}
.say-name {
  @apply text-5xl md:text-[7rem] font-extrabold text-white;
}
.say-skills {
  @apply text-lg md:text-2xl leading-relaxed text-white;
}
</style>