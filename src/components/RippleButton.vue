<template>
  <button
    @mousemove.self="onMouseMove"
    @mouseleave.self="onMouseLeave"
    class="rounded focus:outline-none shadow-md overflow-hidden transition duration-300 backlight text-white tracking-wider"
    :class="lg ? 'text-base sm:text-xl px-4 py-2' : 'text-base sm:text-lg px-3 py-1'"
  >
    <div
      ref="shimmer"
      @mousemove.prevent
      class="absolute top-0 h-10 opacity-0 ripple transition duration-75"
      :class="lg ? 'w-2' : 'w-1'"
    ></div>
    <slot></slot>
  </button>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    lg: Boolean
  },
  setup(){
    const shimmer = ref(null)

    const onMouseMove = (e) => {
      shimmer.value.style.opacity = '1'
      shimmer.value.style.left = `${e.offsetX}px`
    }

    const onMouseLeave = (e) => {
      shimmer.value.style.opacity = '0'
      shimmer.value.style.left = `${e.offsetX}px`
    }

    return {
      shimmer,
      onMouseMove,
      onMouseLeave
    }
  }
}
</script>

<style scoped>
.ripple {
  background: rgba(255, 255, 255, 0.4);
  filter: blur(10px);
  box-shadow: 0 0 50px 10px rgba(255, 255, 255, 0.4);
}
button {
  transition: filter 0.2s;
}
button:hover {
  filter: brightness(105%);
}
.backlight {
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.15);
}
</style>