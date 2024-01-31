---
dynamic: true
page_type: events
---

<script setup>
import { useData } from 'vitepress'
const { params, frontmatter: f } = useData()
</script>

<EventAnnouncement v-bind="f" />

<youtube-embed v-if="f.youtube_video" :video="f.youtube_video"></youtube-embed>

<h2 v-if="f?.schedule?.length>0">Event schedule</h2>

<EventSchedule :schedule="f?.schedule" />

<!-- @content -->

<youtube-embed v-if="f.live_stream" :video="f.live_stream"></youtube-embed>

<EventMedia class="mt-4" :media="f.media" />

## This event is a part of the project

<ProjectCard class="m-4 max-w-55ch" v-bind="f?.project" />

<!-- <pre class="text-xs">{{ frontmatter }}</pre> -->
