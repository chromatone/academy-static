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

<template >
  <div style="padding-bottom:0;padding-left:0; padding-right:0; flex: 1 1 auto">
    <a class="overflow-hidden flex flex-wrap shadow-lg hover-shadow-xl transition flex-1 dark-bg-dark-300 max-w-150 no-underline"
      :href="`/events/${slug}/`">
      <div class="p-0 min-w-50 relative flex items-start justify-center" style="flex: 1 0 ">
        <div class="text-120px mt-6 flex gap-2 absolute p-2 opacity-80 invert i-ic-round-play-circle"
          v-if="youtube_video">
        </div><img style="margin:0"
          :src="`https://db.chromatone.center/assets/${props.poster || props.cover}?fit=cover&amp;width=600&amp;height=600&amp;format=webp`" />
      </div>
      <div class="flex flex-col p-4 gap-2" style="flex: 1 1 200px">
        <div class="text-sm -mx-1"><span class="bg-light-900 dark-bg-dark-600 px-1 py-1 rounded">{{ project?.title }}
          </span></div>
        <div class="text-2xl font-bold flex items-center gap-2">{{ title }}</div>
        <div class="text-lg">{{ formatted }} <a :href="`/partners/${place?.slug}/`" v-if="place?.slug">@ {{ place?.title
        }}</a>
        </div>
        <div class="flex-1"> </div>
        <div class="text-md">{{ description }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>