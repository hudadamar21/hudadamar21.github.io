<template>
  <section :class="title" class="relative text-center">
    <h3 class="text-2xl md:text-3xl font-bold mb-8 text-white dark:text-red-500">{{ title }}</h3>
    <button 
        class="button-list-image base-button-primary"
        v-if="listcounts > 4"
        @click="$emit('showall', title)" 
    >
      Show All
    </button>
    <ul class="w-full px-2 flex flex-col sm:flex-row md:flex-row justify-center flex-wrap items-center"
        :class="direction == 'vertical' ? 'flex-col' : ''">
      <li v-for="(list, index) in listitem" :key="list.id" class="relative w-full mb-3 sm:w-1/2 md:w-1/4 flex items-center justify-evenly ">
        <div class="flex justify-center items-center flex-col base-bg-color w-52 h-40 md:w-64 md:h-64 border base-border-color base-text-color shadow">
          <div class="w-16 h-16 md:w-32 md:h-32 flex justify-center items-center">
            <img :src="list.image" class="mb-1 md:mb-3">
          </div>
          <h3 v-if="list.year" class="text-sm">{{ list.year}}</h3>
          <h4 class="font-semibold text-sm md:text-xl">{{ list.name }}</h4>
          <h4 v-if="list.city" class="text-sm">{{ list.city }}</h4>
        </div>
        <slot v-if="index !== listitem.length - 1" name="prefix"></slot>
        <div v-else class="absolute -right-2 hidden md:block base-text-color"></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    listitem: {
      type: Object,
      required: true
    },
    listcounts: Number,
    title: {
      type: String,
      required: true
    },
    direction: String
  }
}
</script>

<style lang="postcss" scoped>
  .button-list-image {
    @apply md:absolute md:right-16 md:top-3 border mb-3 rounded px-2 py-1 focus:outline-none focus:ring-1 ring-red-500
  }
</style>