<template>
  <div class="relative overflow-hidden flex flex-col items-start justify-center bg-white bg-opacity-20 flex-grow p-5 gap-3 rounded">
    <div 
      v-for="social in social_list" 
      :key="social.name" 
      class="flex items-center gap-2 text-white px-3 py-2 transition-none hover:bg-white hover:bg-opacity-20 rounded cursor-pointer">
        <div v-html="social.icon"></div>
        <a :href="social.url" target="_blank">{{ social.name }}</a>
    </div>
    <div class="absolute top-full right-0 w-2/3 h-700px bg-white bg-opacity-10 transform -translate-y-1/2 rotate-45"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social_list: [
        {
          name: 'Facebook',
          url: 'https://facebook.com/hudasevanfold',
          icon: `<svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
          </svg>`
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/huda-damar-ba95191a0/',
          icon: `<svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
            <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"/>
          </svg>`
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCPB7PB6y30lJ2miy5hHODEw',
          icon: `<svg class="w-6 h-6" viewBox="0 0 310 310" fill="currentColor">
            <g id="XMLID_822_">
              <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
                C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
                C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
                c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
                c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
                C204.394,157.263,202.325,160.684,199.021,162.41z"/>
            </g>
          </svg>`
        },
        {
          name: 'Github',
          url: 'https://github.com/hudadamar21',
          icon: `<svg class="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" >
            <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"/>
          </svg>`
        }

      ]
    }
  }
}
</script>

<style>
 .h-700px {
   height: 700px;
 }
</style>