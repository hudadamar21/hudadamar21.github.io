import { createApp } from 'vue'
import store from './store';
import router from "./router";
import App from './App.vue'
import aos from "aos";
import 'aos/dist/aos.css' 

import './assets/css/tailwind.css'
import './assets/css/mystyles.css'

aos.init()

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
