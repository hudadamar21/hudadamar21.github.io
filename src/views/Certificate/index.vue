<template>
  <LayoutPage title="CERTIFICATE">
    <div class="pl-24 pr-10">
      <div class="flex flex-col gap-10">
        <div v-for="(images, name) in certificateList" :key="name" >	        	
          <h1 class="font-bold text-2xl mb-2 capitalize">{{ name }}</h1>
          <div class="flex items-center w-full flex-wrap">
            <div class="w-1/3" v-for="img of images" :key="img.name">
              <img  class="p-2" :src="img.url" :alt="img.name">
            </div>
          </div>
        </div>
      </div>
    </div>

  </LayoutPage>
</template>

<script>
import LayoutPage from '@/layouts/Page.vue'
import { reactive } from 'vue';
import { certificates } from "@/data/certificates";
export default {
  components: {
    LayoutPage
  },
  setup(){
    const images = reactive(certificates)


    const mappingCertificateList = (list) => {
      const getAllCertificateFrom = list.map(img => (img.from))

      const getFromList = new Set(getAllCertificateFrom)
      const certificateImages = {}
      getFromList.forEach(from => {
        certificateImages[from] = []
        list.forEach(img => {
          if(img.from === from){
            certificateImages[from] = [...certificateImages[from], img]
          }
        })
      })

      return certificateImages
    }

    return {
      certificateList: mappingCertificateList(images)
    }
  }
}
</script>

<style>
.brick {
  box-sizing: border-box;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  counter-increment: brick-counter;
  @apply mb-1
}
</style>