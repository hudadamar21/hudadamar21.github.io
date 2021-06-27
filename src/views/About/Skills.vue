<template>
  <h1 class="text-3xl font-bold tracking-widest">SKILLS</h1>
  <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-3 mt-10">
    <h1 class="writing-vertical text-gray-500 font-semibold tracking-tighter">{{ skill.name }}</h1>
    <div class="flex items-center gap-5 pl-3 flex-wrap">
      <div v-for="tech in skill.techs" :key="tech.name" class="grid place-items-center">
        <img :src="tech.image" class="h-12 object-contain" :alt="`logo ${tech.name}`">
        <p class="mt-1">{{ tech.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import myskills from "../../data/skills";

export default {
  setup(){
    const skills = ref(myskills)

    return {
      skills
    }
  }
}
</script>

<style>

</style>