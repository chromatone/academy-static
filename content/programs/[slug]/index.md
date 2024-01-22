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
<program-application :programId="f?.id" />
</client-only>

<!-- 

<div class="py-12 bg-light-600 dark-bg-dark-400 px-8 gap-6 flex flex-col">
<a
:href="`/programs/${f?.slug}/apply/`"
class="p-4 bg-purple-400 dark-bg-purple-600 text-2xl font-bold rounded-lg shadow">APPLY TO THE PROGRAM</a>
<div class="text-sm">You will become a part of the growing community of visual music students, teachers and independent practicioners. Just fill out a simple form and you will receive a personal invitation shortly.</div>
</div> -->
