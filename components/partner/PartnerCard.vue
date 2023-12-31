<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  id: { type: String, default: '' },
  logo: { type: String, default: '' },
  slug: { type: String, default: '' },
})
</script>

<template lang='pug'>
a.p-4.flex.items-center.no-underline.justify-center.bg-light-900.bg-opacity-70.hover-bg-opacity-100(
  style="flex:1 1 160px;" 
  :title="title"
  :href="`/partners/${slug}/`")
  img.max-w-50(:src="`/logos/${slug}.webp`")
</template>