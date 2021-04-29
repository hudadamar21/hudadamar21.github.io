<template>
  <h1 class="text-4xl p-4 z-40 relative w-1/3 text-white">{{ name }}</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>