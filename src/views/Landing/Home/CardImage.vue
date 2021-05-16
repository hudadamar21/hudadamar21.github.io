<template>
  <!-- image -->
  <div ref="cardImage" class="container-image opacity-animate opacity-0 transition-opacity duration-1000">
    <div class="image-card cursor-pointer w-96 md:w-3/5 h-full md:h-4/6 md:m-0 bg-black">
      <img :src="logo3d" class="object-cover object-center h-full grayscale-80" />
      <!-- social media -->
      <div class="social-media">
        <FlyingLabelButton name="github" class="flying-button">
          <SVGIcon icon="github" />
        </FlyingLabelButton>
        <FlyingLabelButton name="youtube" class="flying-button">
          <SVGIcon icon="youtube" />
        </FlyingLabelButton>
        <FlyingLabelButton name="linkedin" class="flying-button">
          <SVGIcon icon="linkedin" />
        </FlyingLabelButton>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import anime from "animejs";

import FlyingLabelButton from '@/components/FlyingLabelButton.vue';
import SVGIcon from '@/components/SVGIcon.vue';

import logo from '@/assets/images/3d_logo.png'

export default {
  components: {
    FlyingLabelButton,
    SVGIcon
  },
  
  setup(){
    const cardImage = ref('')
    const logo3d = ref(logo)

    onMounted(() => {
      setTimeout(() => cardImage.value.classList.remove('opacity-0'), 2000);
      setTimeout(() => showCard(), 500)
    })

    const showCard = () => {
      anime({
        targets: '.image-card',
        rotateZ: [-0.5, 0.5],
        duration: 2000,
        direction: 'alternate',
        easing: 'easeInOutSine',
        loop: true,
      })

      anime({
        targets: '.social-media .flying-button',
        translateY: 3,
        direction: 'alternate',
        duration: 1000,
        loop: true,
      })
    }

    return {
      logo3d,
      cardImage
    }
  }
}
</script>

<style lang="postcss">
.container-image {
  @apply h-2/3 md:h-full w-11/12 md:w-1/2 flex items-end md:items-center px-5 md:px-0;
}
.image-card {
  @apply shadow-md rounded-xl flex justify-center overflow-hidden;
}
.social-media {
  @apply absolute bottom-3 flex justify-center items-center gap-4 pb-2 w-full h-12;
}
.grayscale-80 {
  filter: grayscale(80%);
}
</style>