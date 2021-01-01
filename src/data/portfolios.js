import jajanken from '../assets/images/portfolio/jajanken.png';
import longts from '../assets/images/portfolio/longts.png';
import miku_hitme from '../assets/images/portfolio/miku_hitme.png';
import calculator from '../assets/images/portfolio/calculator.png';
import code_highlighter from '../assets/images/portfolio/code_highlighter.png';
import saxtile from '../assets/images/portfolio/saxtile.png';
import search_text_youtube from '../assets/images/portfolio/search_text_youtube.png';
import simple_note from '../assets/images/portfolio/simple_note.png';
import smovies from '../assets/images/portfolio/smovies.png';

const portfolios = [
  {
    title: 'Saxtile',
    image: saxtile,
    detail: {
      teknologi: ['Vuejs','Tailwindcss','Firebase','PWA'],
      desc: '<p> Webapp ini dibuat karena masalah pribadi, ketika mendapatkan link dari handphone dan ingin membukanya di PC/Laptop, sebelum webapp ini di buat biasanya saya ketikan link dari handphone tersebut di browser PC/Laptop saya dan itu sangatlah merepotkan. <br> karena itu saya membuat webapp ini untuk memudahkan menyimpan link/text dengan fitur copy link dan open link, dan juga penambahan fitur save file.</p>',
      link: 'https://hudadamar21.github.io/saxtile',
    }
  },
  {
    title: 'Code Highlighter',
    image: code_highlighter,
    detail: {
      teknologi: ['Vuejs','Tailwindcss','API'],
      desc: 'Webapp ini dibuat sebagai submission pada Webinar Vuejs Intermediate (Vuex) HimitXDana, dengan menggunakan API yang diberikan oleh pembicara pada sesi webinar.',
      link: 'https://hudadamar21.github.io/code-highlighter',
    }
  },
  {
    title: 'Calculator',
    image: calculator,
    detail: {
      teknologi: ['Tailwindcss','Javascript'],
      desc: 'Webapp ini dibuat untuk menghitung selayaknya kalkulator pada umumnya.',
      link: 'https://hudadamar21.github.io/calculator',
    }
  },
  {
    title: 'Search Text Youtube',
    image: search_text_youtube,
    detail: {
      teknologi: ['Vuejs','Tailwindcss','API'],
      desc: 'Webapp ini dibuat sebagai submission pada Webinar Vuejs Beginner HimitXDana, berfungsi untuk mencari text(subtitle) pada video youtube yang linknya bisa di cantumkan pada web, dengan menggunakan API yang diberikan oleh pembicara pada sesi webinar.',
      link: 'https://hudadamar21.github.io/search-text-youtube',
    }
  },
  {
    title: 'SMovies',
    image: smovies,
    detail: {
      teknologi: ['Reactjs','API'],
      desc: 'Webapp ini dibuat untuk mencari informasi seputar film dengan menggunakan OMDB API.',
      link: 'https://hudadamar21.github.io/smovies',
    }
  },
  {
    title: 'Simple Note',
    image: simple_note,
    detail: {
      teknologi: ['Reactjs','Firebase'],
      desc: 'Webapp ini dibuat untuk mencatat sesuatu text dan menyimpannya.',
      link: 'https://hudadamar21.github.io/simple-note',
    }
  },
  {
    title: 'Miku : Hit me!',
    link: 'https://hudadamar21.github.io/miku-hitme',
    image: miku_hitme,
    detail: {
      teknologi: ['HTML','CSS','Javascript'],
      desc: 'Web games ini adalah hasil dari pembelajaran di channel Webprogramming Unpas. pada game ini mirip seperti game pukul tikus tetapi saya ganti dengan object Hatsune miku.',
      link: 'https://hudadamar21.github.io/miku-hitme',
    }
  },
  {
    title: 'Long Text Shadow',
    image: longts,
    detail: {
      teknologi: ['HTML','CSS','Javascript'],
      desc: 'Ini dibuat dari tutorial channel youtube OnlineTutorial. pada web ini dapat mengubah text yang ditulis dengan tambahan long shadow. dapat juga mengubah warna dari text,shadow dan background. ',
      link: 'https://hudadamar21.github.io/long-text-shadow',
    }
  },
  {
    title: 'Jajanken',
    link: 'https://hudadamar21.github.io/jajanken',
    image: jajanken,
    detail: {
      teknologi: ['HTML','CSS','Javascript'],
      desc: 'Web games ini adalah hasil dari pembelajaran di channel Webprogramming Unpas. dengan perubahan styles.',
      link: 'https://hudadamar21.github.io/jajanken',
    }
  },
]

for (let i = 0;  i <= portfolios.length - 1; i++) {
  portfolios[i].id = i + 1
}

export { portfolios }

