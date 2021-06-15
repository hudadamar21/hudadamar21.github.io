<template>
  <LayoutPage title="PORTFOLIO">
    <div class="relative md:pt-16 md:p-20 md:pr-5 flex flex-col md:flex-row">
      <div class="lg:pr-5 w-full md:w-[70%] lg:w-[55%]">
        <PortfolioList/>
      </div>
      <div class="sticky top-0 md:ml-5 lg:p-5 w-full md:w-[30%] lg:w-[40%] self-start">
        <Categories/>
        <Tags/>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
import LayoutPage from '@/layouts/Page.vue'

import PortfolioList from './PortfolioList.vue';
import Categories from './Categories.vue';
import Tags from './Tags.vue';

export default {
  components: { LayoutPage, PortfolioList, Categories, Tags },
}
</script>