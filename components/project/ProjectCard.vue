<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';
import { data } from '../../db/academy.data'
import { useData } from 'vitepress';

const { isDark } = useData()

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
  events: { type: Array, default: [] },
  program: { type: Object, default: () => ({}) },
  sort: { type: Number, default: '' },
})

const from = useDateFormat(() => props?.start_date, 'DD MMM YYYY')
const to = props?.end_date ? useDateFormat(() => props?.end_date, 'DD MMM YYYY',) : 'Present'

</script>

<template lang='pug'>
a.overflow-hidden.flex.flex-wrap.shadow-lg.hover-shadow-xl.transition.flex-1.dark-bg-dark-300.no-underline.b-4.z-100.bg-light-100.dark-bg-dark-200( :href="`/projects/${slug}/`" 
  style="padding-bottom:0;padding-left:0; padding-right:0; flex: 1 1 auto" 
  :style="{borderColor:`oklch(${isDark ? 60 : 92}% .07 ${(sort-1)*360/data?.projects.length})`}"
  )
  .p-0.min-w-50.relative.bg-cover.bg-center.min-h-60(style="flex: 1 1 300px"
    :style="{backgroundImage:`url(/covers/${slug}.webp)`, borderColor:`oklch(${isDark ? 60 : 92}% .07 ${(sort-1)*360/data?.projects.length})`}"
    )
    .text-100px.flex.gap-2.absolute.top-11.left-10.p-2.opacity-80.i-ic-round-play-circle(v-if="youtube_video")

  .flex.flex-col.p-4.gap-2(style="flex: 1 1 200px")
    .text-sm {{ from }} – {{ to }}
    .text-2xl.font-bold.flex.items-center.gap-2 {{ title }}
    .flex.flex-wrap.gap-2.items-center.capitalize
      a.px-2.bg-light-800.dark-bg-dark-800.rounded(v-if="program?.slug" :href="`/programs/${program.slug}/`") {{ program.title }} 
      .px-2.bg-light-500.dark-bg-dark-500.rounded(v-if="events.length>0") {{ events.length }} event{{ (events.length % 10 === 1 && events.length !== 11) ? '' : 's' }}
    .text-md.leading-normal {{ description }}
    slot

</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>