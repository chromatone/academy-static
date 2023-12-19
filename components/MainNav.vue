<script setup>
</script>

<template lang='pug'>


.flex.flex-wrap.gap-4.p-4.links.items-center.justify-center
  a(href="/programs/") Programs
  a(href="/projects/") Projects
  a(href="/events/") Events
  a(href="/tutors/") Tutors
  a(href="/partners/") Partners
  a(href="/about/") About

</template>

<style scoped lang="postcss">
.links a {
  @apply rounded flex-auto text-3xl p-4 bg-light-700 shadow-md hover-shadow-lg transition dark-bg-dark-500 hover-dark-bg-dark-200 text-center;
}
</style>