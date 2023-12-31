---
dynamic: true
page_type: projects
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params, frontmatter: f } = useData()

const events = computed(()=>[...f.value?.events].sort((a,b)=>(new Date(a.date)).getTime()>(new Date(b.date)).getTime() ? -1:1))

</script>

<youtube-embed v-if="f?.youtube_video" :video="f.youtube_video"></youtube-embed>

<!-- @content -->

<h2 v-if="f.partners.length>0">Partners</h2>

<div class="flex mb-8 bg-light-200/50 rounded-xl flex-wrap gap-2 max-w-150">
<PartnerCard v-for="partner in f?.partners" v-bind="partner?.partners_id" ></PartnerCard>
</div>

<h3>Project is part of the program</h3>

<ProgramCard class="m-4" v-bind="f?.program" />
