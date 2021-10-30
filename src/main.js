import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import 'aos/dist/aos.css' 

import './assets/css/tailwind.css'
import './assets/css/mystyles.css'

createApp(App)
  .use(router)
  .mount('#app')
