<template>
  <div class="py-32 md:py-56 flex flex-col justify-center">
    <img src="@/assets/images/stars.png" alt="stars" class="absolute w-full h-screen opacity-20 z-[-1]"/>
    <div class="z-10 pl-12 md:pl-24 w-full md:w-4/5">
      <div class="relative">
        <img src="@/assets/images/icons/quote.png" class="absolute -top-7 md:-top-16 -left-7 md:-left-16 w-12 md:w-28 w-12 md:h-28 filter brightness-150" alt="">
        <slot/>
      </div>
      <p class="text-gray-500 text-sm md:text-xl font-medium uppercase">{{ quoteFrom }}</p>
    </div>
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