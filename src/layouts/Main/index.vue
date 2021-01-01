<template>
  <section id="main">
    <banner/>
    <about/>
    <portfolio/>
    <contact/>
  </section>
</template>

<script>
import banner from './banner.vue';
import about from './about.vue';
import portfolio from './portfolio.vue';
import contact from './contact.vue';
export default {
  components: {
    banner,
    about,
    portfolio,
    contact
  }
}
</script>

<style lang="postcss">
  
</style>