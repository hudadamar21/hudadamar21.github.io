<template>
  <section id="contact" class="w-full relative">
    <SectionTitle name="CONTACT"/>
    <div class="center-object bg-gray-900 w-32 w-full h-32 z-0 hidden md:block">
    </div>
    <div class="relative p-5 md:p-10 md:px-20 flex flex-col items-center justify-center md:flex-row">
      <!-- Social Media -->
      <div class="w-full md:w-1/2 py-5 px-5 md:px-0">
       <div class="bg-gray-800 rounded w-full md:w-1/2 h-full p-5 pt-8">
         <h3 class="text-2xl font-semibold mb-5 text-gray-100 ">My Social Media</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="(sosmed, index) in socials" :key="index">
              <button >
                <a :href="sosmed.link" class="sosmed-link" target="_blank">
                  <div v-html="sosmed.icon"></div>
                  {{ sosmed.name }}
                </a>
              </button>
            </li>
          </ul>
       </div>
      </div>
      <!-- Contact me -->
      <div class="w-full md:w-1/2 py-5 px-5  bg-gray-800 rounded">
        <h2 class="text-gray-100 text-2xl pb-3 font-semibold">Send the Message <strong class="text-gray-400 text-base ml-3"> * fitur ini belum berfungsi</strong></h2>

        <div class="row100 ">
            <div class="col">
                <div class="inputBox base-text-color">
                    <input type="text" name="" required class="base-input-text-color">
                    <span class="text text-gray-100">Name</span>
                    <span class="line bg-gray-700"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox base-text-color">
                    <input type="text" name="" required class="base-input-text-color">
                    <span class="text">Email</span>
                    <span class="line bg-gray-700"></span>
                </div>
            </div>
        </div>
        <div class="row100">
            <div class="col">
                <div class="inputBox base-text-color textarea">
                    <textarea required class="base-input-text-color"></textarea>
                    <span class="text">Your Message..</span>
                    <span class="line bg-gray-700"></span>
                </div>
            </div>
        </div>
        <div class="row100">
            <div class="col">
                <input type="submit" value="Send" class="base-button-primary">
            </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import { reactive } from 'vue';
import {social_media} from '../../data/social_media';

import SectionTitle from '../../components/SectionTitle.vue';
export default {
  components: {
    SectionTitle
  },
  setup(){
    const socials = reactive(social_media)
    return {
      socials
    }
  }
}
</script>

<style lang="postcss">

  .text {
    @apply text-gray-100
  }
  .center-object {
    position: absolute;
    margin-top: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sosmed-link {
    @apply flex items-center text-gray-100 hover:text-gray-100 hover:bg-gray-700 p-2 rounded
  }
  #contact{
    @apply min-h-screen w-full bg-gradient-to-tr from-black to-gray-900
  }

  #contact .row100 {
      position: relative;
      width: 100%;
  }

  #contact .row100 .col {
      position: relative;
      width: 100%;
      padding: 0 10px;
      margin: 30px 0 10px;
      transition: 0.3s;
  }

  #contact .row100 .inputBox {
      position: relative;
      width: 100%;
      height: 40px;
  }

  #contact .row100 .inputBox input,
  #contact .row100 .inputBox.textarea textarea {
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      box-shadow: none;
      border: none;
      outline: none;
      font-size: 18px;
      padding: 0 10px;
      z-index: 1;
  }

  #contact .row100 .inputBox .text {
      position: absolute;
      top: 0;
      left: 0;
      line-height: 40px;
      font-size: 18px;
      padding: 0 10px;
      display: block;
      transition: 0.3s;
      pointer-events: none;
  }

  #contact .row100 .inputBox input:focus+.text,
  #contact .row100 .inputBox input:valid+.text {
      top: -35px;
      left: -10px;
  }

  #contact .row100 .inputBox .line {
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 2px;
      transition: 0.3s;
      border-radius: 2px;
      pointer-events: none;
  }

  #contact .row100 .inputBox input:focus~.line,
  #contact .row100 .inputBox input:valid~.line {
      height: 100%;
  }

  #contact .row100 .inputBox.textarea {
      position: relative;
      width: 100%;
      height: 150px;
      padding: 10px 0;
  }

  #contact .row100 .inputBox.textarea textarea {
      width: 100%;
      height: 100%;
      resize: none;
  }

  #contact .row100 .inputBox textarea:focus+.text,
  #contact .row100 .inputBox textarea:valid+.text {
      top: -35px;
      left: -10px;
  }

  #contact .row100 .inputBox textarea:focus~.line,
  #contact .row100 .inputBox textarea:valid~.line {
      height: 100%;
  }

  input[type="submit"] {
    @apply px-7 py-2 cursor-pointer focus:outline-none text-xl rounded-sm transition duration-300
  }
</style>