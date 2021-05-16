<template>
  <section :id="name" class="relative h-screen w-full text-white">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>