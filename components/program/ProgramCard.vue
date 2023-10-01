<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  description: { type: String, default: '' },
  url: { type: String, default: '' },
  cover: { type: String, default: '' },
  poster: { type: String, default: '' },
  youtube_video: { type: String, default: '' },
  start_date: { type: String, default: '' },
  end_date: { type: String, default: '' },
  field: { type: Array, default: [] },
  projects: { type: Array, default: [] },
})


</script>

<template lang='pug'>
a.overflow-hidden.flex.flex-wrap.shadow-lg.hover-shadow-xl.transition.flex-1.dark-bg-dark-300.max-w-150.no-underline( :href="`/programs/${slug}/`" style="padding-bottom:0;padding-left:0; padding-right:0; flex: 1 1 auto" )
  .flex.flex-col.p-4.gap-2.w-full
    .flex.items-center.gap-2 
      .text-2xl.font-bold {{ title }}
      .flex-1
      .flex.gap-2.items-center.capitalize
        .px-2.bg-light-800.dark-bg-dark-800.rounded(v-for="tag in field" :key="tag") {{ tag }} 
        .px-2.bg-light-500.dark-bg-dark-500.rounded(v-if="projects.length>0") {{ projects.length }} project{{ (projects.length % 10 === 1 && projects.length !== 11) ? '' : 's' }}
    .text-sm.leading-normal {{ description }}


</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>