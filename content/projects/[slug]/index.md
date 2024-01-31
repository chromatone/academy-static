---
dynamic: true
page_type: projects
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params, frontmatter: f } = useData()

const events = computed(() => [...f.value?.events].sort((a, b) => (new Date(a.date)).getTime() > (new Date(b.date)).getTime() ? -1 : 1))

const partners = computed(() => {
  return f.value?.partners?.sort((a,b)=> a.sort < b.sort ? 1:-1)
})

</script>

<youtube-embed v-if="f?.youtube_video" :video="f.youtube_video"></youtube-embed>

<!-- @content -->

<h3>This project is part of our educational program</h3>

<ProgramCard class="m-4" v-bind="f?.program" />
