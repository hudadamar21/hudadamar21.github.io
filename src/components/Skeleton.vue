<template>
  <div class="flex flex-col w-full px-5 animate-pulse">
    <div v-for="val of countSkeleton" :key="val" class="relative card-skeleton overflow-hidden shadow"
         :class="cardSkeleton">
      <div class="absolute bg-white opacity-25 w-56 h-64 pulse"
          :style="`animation-delay: ${val / 10}s`"></div>
      <div class="flex flex-col w-10/12 h-full">
        <div :class="`${contentSkeleton} w-1/2 h-5 rounded mb-2`"></div>
        <div :class="`${contentSkeleton} w-full h-full rounded`"></div>
      </div>
      <div class="w-2/12 h-full flex items-center pl-2 mt-2">
        <div :class="`${contentSkeleton} w-full h-8 rounded`"></div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import { defineProps, computed, ref, onMounted } from "vue";

  onMounted(() => {
    for (let i = 1; i <= this.count; i++) {
      this.countSkeleton.push(i)
    }
  })

  defineProps({
    count: {
      type: Number,
      required: true,
      default: 1
    },
    mode : {
      type: String,
      required: true,
      default: 'light'
    }
  })

  const countSkeleton = ref([])

  const cardSkeleton = computed(() => mode === 'light' ? 'bg-white' : 'bg-gray-600')
  const contentSkeleton = computed(() => mode === 'light' ? 'bg-gray-400' : 'bg-gray-700')

</script>

<style lang="postcss">
  .card-skeleton {
    @apply flex justify-between items-center rounded w-full h-24 p-2 my-2
  }
  .card-skeleton .pulse {
    filter: blur(3px);
    animation: leftToRight 2s infinite;
  }

  @keyframes leftToRight {
    0%{
      transform: translate(-300px);
      opacity: 0.2;
    }
    100%{
      transform: translate(1000px);
      opacity: 0;
    }
  }
  
</style>