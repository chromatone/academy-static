<script setup>
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: { type: Array, default: () => ([]) }
})
</script>

<template lang="pug">
.flex.flex-col.max-w-65ch.mx-2.sm-mx-4.mt-4
  .flex.flex-col.gap-8
    ProjectCard(v-for="project in projects", :key="project" v-bind="project")
</template>