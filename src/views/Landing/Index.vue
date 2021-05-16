<template>
  <section id="landing-page">
    <Navbar/>
    <Home />
    <About />
    <Portfolio />
    <Contact/>
  </section>
</template>

<script>
import Home from "@/views/Landing/Home/Home.vue";
import Portfolio from "@/views/Landing/Portfolio.vue";
import Contact from "@/views/Landing/Contact/Contact.vue";
import Navbar from "@/views/Landing/Navbar.vue";
import About from "@/views/Landing/About.vue";

export default {
  components: {
    Navbar,
    Home,
    About,
    Portfolio,
    Contact
  }
}
</script>

<style lang="postcss">
</style>
