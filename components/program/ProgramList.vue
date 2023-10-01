<script setup>
import ProgramCard from './ProgramCard.vue'

const props = defineProps({
  programs: { type: Array, default: () => ([]) }
})
</script>

<template lang="pug">
.flex.flex-wrap.max-w-55ch.mx-4.sm-mx-8.gap-8
  ProgramCard(v-for="program in programs", :key="program" v-bind="program")
</template>