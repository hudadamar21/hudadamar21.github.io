<template>
  <a :href="url" target="_blank" class="flying-button group">
    <p class="tooltip opacity-0 group-hover:opacity-100"
      :class="{
        'bg-blue-600': name === 'Facebook',
        'bg-red-600': name === 'Youtube',
        'bg-green-600': name === 'Github'
      }"
    >
      {{ name }}
    </p>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped lang="postcss">
  .flying-button {
    @apply  text-white transition duration-75 transform hover:-translate-y-1 flex justify-center rounded-full p-[2px] shadow-lg bg-gray-800 focus:outline-none
  }

  .tooltip {
    @apply absolute -top-8 text-sm text-white tracking-wider transition px-2 py-1 rounded tracking-widest
  }
</style>