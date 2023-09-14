<script setup>
const props = defineProps({
  announcement: { type: String, default: '' },
  cover: { type: String, default: '' },
})

</script>

<template lang='pug'>
.max-w-150.bg-light-100.dark-bg-dark-300.m-4.shadow.rounded-xl.flex.flex-col.gap-4(v-if="announcement || cover")
  img(v-if="cover" style="margin:0;" :src="`https://db.chromatone.center/assets/${cover}?format=webp`")
  .p-4.sm-p-8 {{ announcement }}
  
</template>