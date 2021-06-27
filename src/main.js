import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import aos from "aos";
import 'aos/dist/aos.css' 

import './assets/css/tailwind.css'
import './assets/css/mystyles.css'

aos.init()

createApp(App)
  .use(router)
  .mount('#app')
