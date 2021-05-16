<template>
  <section class="min-h-screen w-full text-white bg-gradient-to-b from-gray-900 to-yellow-800">
    <div class="h-screen p-32">
      
    </div>
    <div  id="Contact" class="h-screen relative bg-gradient-radial-b from-yellow-500 to-yellow-800 overflow-hidden">
      <Sunset @opencontact="openContactMe" />

      <!-- Contact me -->
      <div ref="contactMe" class="absolute transform translate-y-full h-screen w-screen inset-0 grid place-items-center transition-all duration-500">
        <div class="backdrop w-2/3 min-h-4/5 bg-white bg-opacity-10 rounded-lg p-10 shadow-2xl">
          <h1 class="text-3xl font-bold tracking-widest text-white mb-3">Contact Me</h1>
          <div class="flex items-start gap-5">
            <form @submit.prevent class="flex flex-col items-start gap-3 w-1/2 ">
              <input type="text" placeholder="Fullname" class="contact-input text-shadow w-full">
              <input type="email" placeholder="Email" class="contact-input text-shadow w-full">
              <textarea 
                cols="30" 
                rows="10" 
                placeholder="Your Message..."
                class="contact-input text-shadow w-full resize-none"
              ></textarea>
              <button class="contact-input tracking-widest shadow hover:bg-opacity-30">Send Message</button>
            </form>
            <SocialList />
          </div>
          <button @click="closeContactMe" class="absolute top-3 right-3 bg-white bg-opacity-20 rounded w-8 h-8 hover:bg-opacity-30 focus:outline-none focus:ring ring-white ring-opacity-20 text-white font-bold text-xl">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import Sunset from "./Sunset.vue";
import SocialList from "./SocialList.vue";
export default {
  components: {
    Sunset,
    SocialList
  },
  setup(){
    const contactMe = ref('')

    const openContactMe = () => {
      contactMe.value.classList.remove('translate-y-full')
    }

    const closeContactMe = () => {
      contactMe.value.classList.add('translate-y-full')
    }

    return {
      contactMe,
      openContactMe,
      closeContactMe
    }
  }
}
</script>

<style lang="postcss">
.backdrop {
  backdrop-filter: blur(10px);
}
.contact-input {
  @apply px-4 py-2 rounded bg-white bg-opacity-20 placeholder-gray-200 text-white focus:border-transparent focus:outline-none focus:ring ring-white ring-opacity-10
}
.text-shadow {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>