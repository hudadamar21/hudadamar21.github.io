<template>
  <section
    :id="title"
    class="relative h-screen w-full text-white overflow-hidden"
  >
    <div v-if="topShading" class="absolute top-0 left-0 h-64 w-full bg-gradient-to-b from-black to-transparent"></div>
    <!-- stars -->
    <img
      src="@/assets/images/stars.png"
      class="absolute w-full h-screen opacity-30"
      alt="stars"
      width="1000"
      height="700"
    />

    <div class="flex items-center h-screen px-5 md:px-20">
      <div class="w-[75%] z-10">

        <!-- Title -->
        <h1 class=" block text-5xl md:text-8xl leading-none tracking-wider uppercase font-bold text-shadow">
          {{ title }}
        </h1>

        <!-- Description -->
        <div class="description shadow-solid">
          <slot name="desc"></slot>
        </div>

        <RippleButton
          class="mt-5"
          size="lg"
          @click="$emit('showmore')"
        >
          Show more
        </RippleButton>

      </div>

      <!-- image -->
      <div class="absolute top-0 right-5 md:right-20 grid items-center justify-items-end w-full h-full">
        <div class="w-2/3 h-2/3 shadow-2xl bg-gray-800 rounded-xl overflow-hidden">
          <img
            :src="image"
            alt="image"
            class="object-cover w-full h-full grayscale-80"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RippleButton from "@/components/RippleButton.vue";

export default {
  components: {
    RippleButton,
  },
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    endSection: { type: Boolean },
    topShading: { type: Boolean }
  },
};
</script>

<style lang="postcss">
.text-shadow {
  text-shadow: 10px 10px 20px rgba(0, 0, 0, 1);
}
.shadow-solid {
  box-shadow: 15px 10px 12px rgba(0, 0, 0, 0.6);
}
.description {
  @apply px-4 md:px-6 py-2 md:py-4 rounded w-max max-w-full md:max-w-[75%] font-semibold text-sm md:text-lg bg-gradient-to-r from-gray-900 to-transparent backdrop-filter backdrop-blur text-gray-100;
}
</style>