<template>
  <button class="flying-button group">
    <p class="tooltip opacity-0 group-hover:opacity-100">
      {{ name }}
    </p>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="postcss">
  .flying-button {
    @apply  text-white transition duration-75 transform hover:-translate-y-1 flex justify-center rounded-full shadow-lg bg-gray-800 focus:outline-none
  }

  .tooltip {
    @apply absolute -top-8 text-sm text-white tracking-wider transition duration-200 bg-gray-800 p-1 rounded tracking-widest
  }
</style>