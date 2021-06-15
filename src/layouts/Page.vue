<template>
  <section class="min-h-screen relative bg-gradient-to-t from-gray-900 to-black text-white">
    <div class="flex items-center justify-start py-5 w-full">
      <a href="/" class="block md:fixed top-3 left-3 mx-5 md:mx-2 justify-self-start bg-gray-700 hover:bg-gray-600 rounded-full p-1 z-50">
        <back class="w-8 h-8"/>
      </a>
      <h1 class="block md:hidden tracking-widest font-bold text-3xl text-gray-100">
        {{ title }}
      </h1>
    </div>
    <h1 class="title writing-vertical">{{ title }}</h1>
    <slot/>
    <footer class="py-7 mt-5 border-t border-gray-800 w-full text-center">
      <p class="text-sm">hudadamar21&copy;2021</p>
    </footer>
  </section>
</template>

<script>
import Back from '@/components/Back.vue'
export default {
  components: { Back },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss">
  .title {
    @apply hidden md:block fixed top-1/2 left-1 md:left-5 transform -translate-y-1/2 text-2xl md:text-3xl font-bold text-gray-600 
  }
</style>