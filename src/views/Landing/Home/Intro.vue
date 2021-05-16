<template>
  <!-- intro -->
  <div class="container-intro z-20">
    <!-- intro self -->
    <div class="lg:mb-4">
      <h2 ref="hello" class="opacity-0 text-3xl md:text-4xl lg:text-5xl text-gray-300 transition duration-1000">
        Hello
      </h2>
      <h1 ref="say_name" class="say-name opacity-0 transition duration-1000">
        I'm Huda Damar
      </h1>
      <h3 ref="say_skills" class="say-skills font-normal opacity-0 mt-1 text-gray-200 transition duration-1000">
        Front-end Web Developer
      </h3>
    </div>

    <!-- cv and cerificate -->
    <div ref="cv_certif" class="opacity-0 w-full flex items-center gap-3 my-3 transition duration-1000">
      <RippleButton>
        Curicullum Vitae
      </RippleButton>
      <RippleButton>
        Cerificate
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
    const say_name = ref('')
    const say_skills = ref('')
    const cv_certif = ref('')
    onMounted(() => {
      opacityOnTimeout(hello, 500)
      opacityOnTimeout(say_name, 1000)
      opacityOnTimeout(say_skills, 1500)
      opacityOnTimeout(cv_certif, 2000)
    })

    const opacityOnTimeout = (ref, duration) => {
      setTimeout(() => {
        ref.value.style.opacity = "1"
      }, duration)
    }

    return {
      hello,
      say_name,
      say_skills,
      cv_certif
    }
  }
}
</script>

<style lang="postcss">
.container-intro {
  @apply flex flex-col justify-start mt-5 md:mt-0 md:justify-center w-full h-1/2 md:h-full md:w-8/12 pl-5 md:pl-20 leading-relaxed cursor-default;
}
.say-name {
  @apply text-4xl md:text-5xl lg:text-6xl font-medium text-white;
}
.say-skills {
  @apply text-lg md:text-xl lg:text-2xl font-thin leading-relaxed text-white;
}
</style>