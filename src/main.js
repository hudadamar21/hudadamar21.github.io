import { createApp } from 'vue'


import App from './App.vue'
import store from './store'
import './index.css'

import '@splidejs/splide/dist/css/splide-core.min.css';
import '@splidejs/splide/dist/css/themes/splide-dark-red.min.css';

import VueSplide from '@splidejs/vue-splide';

import Particles from "particles.vue3";

createApp(App)
  .use( VueSplide )
  .use(Particles)
  .use(store)
  .mount('#app')

