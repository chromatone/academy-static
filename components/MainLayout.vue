<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'


const { isDark, frontmatter: f } = useData()

const route = useRoute()
</script>

<template lang="pug">
.flex.flex-col.bg-light-500.dark-bg-dark-100.dark-text-light-500.min-h-100dvh.site
  .sticky.top-0.z-20.flex.w-full.items-center.gap-2.px-4.py-2

    a.opacity-60.hover-opacity-100.transition(href="/") academy
    a.p-0.opacity-40.hover-opacity-100.transition(href="https://chromatone.center") chromatone.center
    .flex-auto
    .cursor-pointer.mt-2px.opacity-30.hover-opacity-80(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-carbon-moon(v-else)
  .max-w-150.mx-auto
    .flex.items-center.gap-4.mt-12.mb-10
      img.w-20.sm-w-30.ml-4(src="/logo.svg")
      .flex.flex-col.gap-2
        .flex.flex-wrap.items-end.gap-2.capitalize
          a.text-4xl.font-bold(href="/") Chromatone
          a.text-md.opacity-40(:href="`/${f?.page_type}/`") {{ f.page_type }}
        .text-3xl {{ f.title }}
    .flex.flex-col.markdown-body.max-w-150
      content
    a.flex.flex-col.gap-4.items-center.my-6(href="/")
      img.w-10(src="/logo.svg")

</template>

<style lang="postcss">
html {
  @apply bg-light-500;
}

html * {
  @apply transition duration-500;
}

html.dark {
  @apply bg-dark-100;
}



.markdown-body {
  line-height: 1.6;
  @apply leading-loose;

  :is(p) {
    @apply p-4;
  }

  :is(td) {
    @apply p-2;
  }

  :is(table) {
    @apply ml-4 mr-6;
  }

  :is(tr):nth-child(2n) {
    @apply bg-dark-500 bg-opacity-10;
  }

  :is(li) {
    @apply p-1 list-circle;
  }

  :is(h1) {
    font-size: 3em;
    padding-bottom: 0.3em;
  }

  :is(h2) {
    font-size: 1.9em;
    @apply p-4 leading-tight;
  }
}


.markdown-body .markdown-body h3 {
  font-size: 1.2em;
  @apply py-2;
}

.markdown-body ul,
.markdown-body ol {
  padding-left: 2em;
}

.markdown-body blockquote {
  margin: 0;
  padding-left: 3em;
  border-left: 0.5em #eee solid;
}

.markdown-body code {
  padding: 0.2em 0.5em;
  margin: 0;
  font-family: monospace;
  font-size: 90%;
  border-radius: 3px;
}
</style>