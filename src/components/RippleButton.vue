<template>
  <button
    @mousemove.self.stop="onMouseMove"
    @mouseleave.self="onMouseLeave"
    class="ripple-button"
    :class="[
      size === 'lg' ? 'text-base sm:text-xl px-4 py-2' 
        : size === 'sm' ? 'text-sm px-2 py-1' 
        : 'text-base sm:text-lg px-3 py-1',
      backlight === 'sm' ? 'backlight-sm' : backlight === 'none' ? '' : 'backlight'
    ]"
  >
    <div
      ref="shimmer"
      @mousemove.prevent
      class="ripple"
      :class="size === 'lg' ? 'w-2' : 'w-1'"
    ></div>
    <slot></slot>
  </button>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    size: String,
    backlight: String
  },
  setup(){
    const shimmer = ref('')

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

<style lang="postcss" scoped>
.ripple-button {
  @apply rounded focus:outline-none shadow-md overflow-hidden transition duration-300 text-white tracking-wider
}
.ripple {
  background: rgba(255, 255, 255, 0.4);
  filter: blur(10px);
  box-shadow: 0 0 50px 10px rgba(255, 255, 255, 0.4);
  @apply absolute top-0 h-10 opacity-0  transition duration-75
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

.backlight-sm {
  box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.15);
}
</style>