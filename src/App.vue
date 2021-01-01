<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<script>
import Header from './layouts/Header.vue';
import Main from './layouts/Main/index.vue';
import Footer from './layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
  *{
    scroll-behavior: smooth !important;
    font-family: 'Texturina';
  }
</style>
