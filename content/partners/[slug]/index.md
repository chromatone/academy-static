---
dynamic: true
page_type: partners
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params, frontmatter: f } = useData()
</script>

<youtube-embed v-if="f?.youtube_video" :video="f.youtube_video"></youtube-embed>

<PartnerDetails v-bind="f" />

<!-- @content -->
