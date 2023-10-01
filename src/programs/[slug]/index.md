---
dynamic: true
page_type: programs
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params, frontmatter: f } = useData()

const projects = computed(()=>[...f.value.projects].sort((a,b)=> a.sort>b.sort ? 1 : -1))

</script>

## Projects

<ProjectList :projects="projects" />

<!-- @content -->
