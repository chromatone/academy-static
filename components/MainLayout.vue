<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'


const { isDark, frontmatter: f, params } = useData()

const route = useRoute()
</script>

<template lang="pug">
.flex.flex-col.items-center.bg-light-500.dark-bg-dark-100.dark-text-light-500.min-h-100dvh.site(
  )
  .fixed.h-screen.w-screen.bg-center.bg-cover.filter.grayscale-50.brightness-140.opacity-20.blur(
    :style="{backgroundImage:`url(/covers/${params?.slug}.webp)`}"
    )
  img.w-20.sm-w-20.ml-4.absolute.top-15(
    src="/logo.svg"
    v-if="f.layout == 'home'"
    )
  .fixed.top-0.z-20.flex.w-full.items-start.gap-2.px-4.py-2(
    )

    a.opacity-60.hover-opacity-100.transition(href="/") academy
    a.p-0.opacity-40.hover-opacity-100.transition(href="https://chromatone.center") chromatone.center
    .flex-auto
    .cursor-pointer.mt-2px.opacity-30.hover-opacity-80(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-carbon-moon(v-else)
  .max-w-160.mx-auto.bg-top.bg-contain.bg-no-repeat.z-100.relative.bg-light-200.dark-bg-dark-300.mt-40.mb-20.rounded-lg.shadow-lg(
    )
    .h-90.w-full.bg-top.bg-cover(
      v-if="f?.cover && f.slug"
      :style="{backgroundImage:`url(/covers/${params?.slug}.webp)`}"
      )
    .flex.items-center.gap-4.pb-6.pt-4.bg-light-600.dark-bg-dark-400

      .flex.flex-col.gap-4.px-4
        .flex.flex-wrap.items-end.gap-2.capitalize.opacity-60.hover-opacity-100.transition
          a.text-2xl.font-bold(href="/") Chromatone
          a.text-lg.opacity-40(:href="`/${f?.page_type}/`") {{ f.page_type }}
        .text-3xl {{ f.title }}
        .text-sm.leading-normal {{ f.description }}
    .flex.flex-col.markdown-body.max-w-200
      content

    MainNav
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