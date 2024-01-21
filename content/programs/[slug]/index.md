---
dynamic: true
page_type: programs
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params, frontmatter: f } = useData()
</script>

<!-- @content -->

<client-only>
<ProgramApplication :program="f" />
</client-only>
