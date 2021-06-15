import { reactive } from 'vue';

// import laravel from '@/assets/images/skill_logo/laravel.png';
import vuejs from '@/assets/images/skill_logo/vuejs.png';
// import reactjs from '@/assets/images/skill_logo/reactjs.png';
import firebase from '@/assets/images/skill_logo/firebase.png';
import tailwindcss from '@/assets/images/skill_logo/tailwindcss.png';

export default reactive([
  {
    name: 'Vue.js',
    image: vuejs
  },
  {
    name: 'Tailwindcss',
    image: tailwindcss
  },
  {
    name: 'Firebase',
    image: firebase
  },
  // {
  //   name: 'laravel',
  //   image: laravel
  // },
  // {
  //   name: 'React.js',
  //   image: reactjs
  // },
])
