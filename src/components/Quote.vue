<template>
  <div class="relative py-32 md:py-56 flex flex-col justify-center">
    <img src="@/assets/images/stars.png" class="absolute w-full h-screen opacity-10 z-10"/>
    <div class="pl-12 md:pl-24 w-full md:w-4/5">
      <div class="relative">
        <img src="@/assets/images/icons/quote.png" class="absolute -top-7 md:-top-16 -left-7 md:-left-16 w-12 md:w-28 w-12 md:h-28" alt="">
        <slot/>
      </div>
      <p class="text-gray-500 text-base md:text-2xl font-medium uppercase">{{ quoteFrom }}</p>
    </div>
    <img src="@/assets/images/stars.png" class="absolute w-full h-screen opacity-20"/>
  </div>
</template>

<script>
export default {
  props: {
    quoteFrom: {
      type: String,
      default: 'Anonymous'
    }
  }
}
</script>

<style>

</style>