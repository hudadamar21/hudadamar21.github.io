import laravel from '../assets/images/skill_logo/laravel.png';
import vuejs from '../assets/images/skill_logo/vuejs.png';
import reactjs from '../assets/images/skill_logo/reactjs.png';
import firebase from '../assets/images/skill_logo/firebase.png';
import tailwindcss from '../assets/images/skill_logo/tailwindcss.png';

const skillsData = [
  {
    name: 'Vue.js',
    image: vuejs
  },
  {
    name: 'Tailwindcss',
    image: tailwindcss
  },
  {
    name: 'laravel',
    image: laravel
  },
  {
    name: 'React.js',
    image: reactjs
  },
  {
    name: 'Firebase',
    image: firebase
  }
]

for (let i = 0;  i <= skillsData.length - 1; i++) {
  skillsData[i].id = i + 1
}

export {skillsData}
