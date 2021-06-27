// basic
import html from '@/assets/images/skills/html.png';
import css from '@/assets/images/skills/css.png';
import javascript from '@/assets/images/skills/javascript.png';

// frontend
import vuejs from '@/assets/images/skills/vuejs.png';
import firebase from '@/assets/images/skills/firebase.png';
import tailwindcss from '@/assets/images/skills/tailwindcss.png';

// backend
import laravel from '@/assets/images/skills/laravel.svg';
import expressjs from '@/assets/images/skills/expressjs.png';

// learning
import python from "../assets/images/skills/python.png";
import reactjs from "../assets/images/skills/reactjs.png";
import flutter from "../assets/images/skills/flutter.png";
import threejs from "../assets/images/skills/threejs.png";
import typescript from "../assets/images/skills/typescript.png";
import svelte from "../assets/images/skills/svelte.svg";
import socketio from "../assets/images/skills/socketio.svg";

const basic = {
  name: 'BASIC',
  techs: [
    {
      name: 'HTML',
      image: html
    },
    {
      name: 'CSS',
      image: css
    },
    {
      name: 'Javascript',
      image: javascript
    }, 
  ]
}

const frontend = {
  name: 'FRONT',
  techs: [
    {
      name: 'Vuejs',
      image: vuejs
    },
    {
      name: 'Tailwindcss',
      image: tailwindcss
    },
  ]
}

const backend = {
  name: 'BACK',
  techs: [
    {
      name: 'Laravel',
      image: laravel
    },
    {
      name: 'Expressjs',
      image: expressjs
    },
    {
      name: 'Firebase',
      image: firebase
    }, 
  ]
}

const skillLearning = {
  name: 'LEARN',
  techs: [
    {
      name: 'Typescript',
      image: typescript
    },
    {
      name: 'Python',
      image: python
    },
    {
      name: 'Flutter',
      image: flutter
    },
    {
      name: 'Socket.io',
      image: socketio
    },
    {
      name: 'Reactjs',
      image: reactjs
    },
    {
      name: 'Svelte',
      image: svelte
    },
    {
      name: 'Three.js',
      image: threejs
    }
  ]
}

const skills = [
  basic,
  frontend,
  backend,
  skillLearning
]

// const tools = [
//   {
//     name: 'Figma',
//     image: figma
//   },
// ]

export default skills
