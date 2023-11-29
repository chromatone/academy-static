<script setup>
import ProgramCard from './ProgramCard.vue'

const props = defineProps({
  programs: { type: Array, default: () => ([]) }
})
</script>

<template lang="pug">
.flex.flex-wrap.max-w-55ch.gap-12.sm-mx-4
  slot
  ProgramCard(v-for="program in programs", :key="program" v-bind="program")

</template>