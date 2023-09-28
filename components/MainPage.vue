<script setup>
import { computed } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'
import { data } from '../db/academy.data'

const today = useDateFormat(useNow(), 'YYYY-MM-DD')
const upcoming = computed(() => data.events.filter(ev => ev.date >= today.value))
</script>

<template lang='pug'>
h2(v-if="upcoming.length > 0") Upcoming events
.m-4.flex.flex-col.gap-8
  EventCard(v-for="event in upcoming", :key="event", v-bind="event").

.flex.flex-wrap.gap-4.p-4.links.max-w-150.items-center.justify-center
  a(href="/projects/") Projects
  a(href="/events/") Events
  a(href="/tutors/") Tutors
  a(href="/partners/") Partners
  a(href="/about/") About

</template>

<style scoped lang="postcss">
.links a {
  @apply rounded text-3xl p-4 bg-light-700 shadow-md hover-shadow-lg transition dark-bg-dark-300;
}
</style>