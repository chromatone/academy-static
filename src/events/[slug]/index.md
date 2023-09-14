---
dynamic: true
page_type: events
---

<script setup>
import { useData } from 'vitepress'
const { params, frontmatter: f } = useData()
</script>

<EventDetails v-bind="f" />

<!-- @content -->

<EventAnnouncement v-bind="f" />

<youtube-embed v-if="f.youtube_video" :video="f.youtube_video"></youtube-embed>

<youtube-embed v-if="f.live_stream" :video="f.live_stream"></youtube-embed>

<EventSchedule :schedule="f?.schedule" />

<EventMedia class="mt-4" :media="f.media" />

## Project

<ProjectCard class="m-4 max-w-55ch" v-bind="f?.project" />

<!-- <pre class="text-xs">{{ frontmatter }}</pre> -->
