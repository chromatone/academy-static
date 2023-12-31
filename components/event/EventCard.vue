<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';

const props = defineProps({
  project: { type: Object, default: () => ({}) },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  url: { type: String, default: '' },
  cover: { type: String, default: '' },
  poster: { type: String, default: '' },
  slug: { type: String, default: '' },
  youtube_video: { type: String, default: '' },
  date: { type: String, default: '' },
  place: { type: Object, default: () => ({}) },
})

const formatted = useDateFormat(() => props?.date, 'DD MMMM YYYY (dddd)')

</script>

<template lang="pug" >
a.opacity-80.hover-opacity-100.flex.flex-wrap.shadow-lg.hover-shadow-xl.transition.flex-1.dark-bg-dark-300.no-underline.border-1.rounded.overflow-hidden(:href="`/events/${slug}/`")
  .p-0.min-w-50.relative.flex.items-start.justify-center.bg-center.bg-cover.min-h-50(
    :style="{ backgroundImage: `url(/covers/${slug}.webp)` }",
    style="flex: 1 1 100px"
    )
    .text-120px.mt-6.flex.gap-2.absolute.p-2.opacity-80.invert.i-ic-round-play-circle(v-if="youtube_video").


  .flex.flex-col.p-4.gap-2(style="flex: 1 1 200px")
    a.flex.flex-col.transition.flex-1.max-w-180.no-underline.gap-2(:href="`/events/${slug}/`")
      .text-sm.-mx-1
        span.bg-light-900.dark-bg-dark-600.px-1.py-1.rounded.
          {{ project?.title }}

      .text-2xl.font-bold.flex.items-center.gap-2 {{ title }}
    .text-md
      a.flex.flex-wrap.transition.flex-1.max-w-150.no-underline(:href="`/events/${slug}/`") {{ formatted }} 
      a(style="font-weight:bold" :href="`/partners/${place?.slug}/`", v-if="place?.slug") @ {{ place?.title }}
    .flex-1
    .text-md {{ description }}
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>