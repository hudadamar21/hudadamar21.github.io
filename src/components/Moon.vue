<template>
  <div class="moon bg-black w-[35rem] h-[35rem] md:mt-5 absolute top-1/2 transform -translate-y-1/2 -right-56 md:right-16 rounded-full right z-20"></div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
  .moon {
    background-image: url('@/assets/images/moon_texture.jpg');
    background-size: cover;
    filter: brightness(60%);
    box-shadow: 0 0 50px 10px rgba(168, 168, 168, 0.432);
    overflow: hidden;
    animation: moon-rotate 150s linear infinite;
  }

  .moon::before {
    content: '';
    @apply absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-transparent
  }

  .moon.right::before {
    content: '';
    @apply absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent to-black
  }

  @keyframes moon-rotate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1090px 0;
    }
  }
</style>