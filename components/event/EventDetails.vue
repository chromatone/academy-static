<script setup>
import { useDateFormat } from '@vueuse/core';

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  announcement: { type: String, default: '' },
  poster: { type: String, default: '' },
  cover: { type: String, default: '' },
  date: { type: String, default: '' },
  start_time: { type: String, default: '' },
  duration: { type: String, default: '' },
  place: { type: Object, default: () => ({}) },
  url: { type: String, default: '' },
  slug: { type: String, default: '' }
})

const formattedDate = useDateFormat(props.date, 'DD MMMM')

const year = useDateFormat(props.date, 'YYYY')

const weekDay = useDateFormat(props.date, 'dddd')
</script>

<template lang='pug'>

.flex.flex-wrap.gap-2
  .flex.gap-2.items-center.whitespace-nowrap(
    style="flex: 1 1 100px"
    )
    .i-la-clock
    .p-0.font-bold {{ start_time?.slice(0,-3) }} 
    .p-0 {{ weekDay }}
    .p-0.opacity-40 {{ duration }}
  .flex.gap-2.items-center.whitespace-nowrap(
    style="flex: 1 1 120px"
    )
    .i-la-calendar
    .p-0.font-bold(v-for="d in formattedDate.split(' ')" :key="d") {{ d }}
    .p-0 {{ year }}

  a.flex.items-center.gap-2.no-underline.font-normal.whitespace-nowrap(
    style="flex: 1 1 120px"
    :href="`/partners/${place?.slug}/`" v-if="place")
    .i-la-map-marker
    .p-0.font-bold {{ place?.title }},
    .p-0 {{ place?.city }},
    .p-0 {{ place?.country }}
  a.p-4.shadow.bg-purple-800.hover-bg-purple-700.text-light-200.font-bold.rounded.text-center.no-underline.cursor-pointer.text-light-900.hover-text-white(
    :class="{'bg-dark-100/50! hover-bg-dark-400!':new Date(date) <= new Date()}"
    target="_blank"
    :href="url"
    v-if="url"
  ) {{ new Date(date) >= new Date() ? 'Get tickets' : 'Past event' }}
  
</template>