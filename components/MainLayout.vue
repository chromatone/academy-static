<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'

import { data } from '../db/academy.data'


const { isDark, frontmatter: f, params } = useData()

const route = useRoute()


const partners = computed(() => {
  return f.value?.partners?.sort((a, b) => a.sort < b.sort ? 1 : -1)
})
</script>

<template lang="pug">
.flex.flex-wrap.bg-light-500.dark-bg-dark-100.dark-text-light-500.min-h-100dvh.site

  .fixed.h-screen.w-screen.bg-center.bg-cover.filter.grayscale-50.brightness-140.opacity-20.blur-2xl(
    :style="{backgroundImage:`url(/covers/${params?.slug}.webp)`}"
    )
  .fixed.top-0.z-2000.flex.w-full.items-start.gap-2.px-4.py-2.bg-light-100.dark-bg-dark-200.bg-opacity-80.dark-bg-opacity-80.backdrop-blur-6(
    )
    a.opacity-60.hover-opacity-100.transition(href="/") academy
    a.p-0.opacity-40.hover-opacity-100.transition(href="https://chromatone.center") chromatone.center
    .flex-auto
    .cursor-pointer.mt-2px.opacity-30.hover-opacity-80(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-carbon-moon(v-else)

  .bg-top.bg-contain.bg-no-repeat.z-100.relative.mt-10.mb-10.mx-2.rounded-lg(
    style="flex: 0 1 60ch"
  )
    .h-90.w-full.bg-top.bg-cover.max-w-60ch(
      v-if="f?.cover && f.slug"
      :style="{backgroundImage:`url(/covers/${params?.slug}.webp)`}"
      )
    .flex.items-center.gap-4.pb-6.pt-4.bg-light-600.dark-bg-dark-400.max-w-60ch

      .flex.flex-col.gap-4.px-4
        .flex.flex-wrap.items-end.gap-2.capitalize.opacity-60.hover-opacity-100.transition
          a.text-2xl.font-bold(href="/") Chromatone Academy
          a.text-lg.opacity-40(:href="`/${f?.page_type}/`") {{ f.page_type }}
        .text-3xl {{ f.title }}
        .text-sm.leading-normal {{ f.description }}
        a(:href="f?.url" v-if="f?.url" target="_blank") {{ f.url }}
        EventDetails(
          v-bind="f" v-if="f?.page_type == 'events'")

    .flex.flex-col.markdown-body.max-w-60ch.bg-light-200.dark-bg-dark-300
      content

  .flex.flex-col.gap-4.my-12(
    style="flex: 100 1 200px"
    )

    .flex.flex-col.gap-2(
      style="flex: 20 1 400px" 
      v-if="f?.events?.length>0 || f?.list?.events") 
      .text-3xl.ml-4.py-8 Events
      .flex.flex-wrap.gap-4.z-100.mx-4
        EventCard.max-w-150(
          style="flex:1 1 250px"
          v-for="event in [...(f?.events || data?.events)].sort((a,b)=>(new Date(a.date)).getTime()>(new Date(b.date)).getTime() ? -1:1)", :key="event" v-bind="event")

    .flex.m-4.flex-wrap.gap-4.z-20(v-if="f?.list?.partners")
      partner-card(v-for="partner in data.partners", v-bind="partner") {{partner}}


    .flex.flex-col.gap-2(
      style="flex: 10 1 500px" 
      v-if="f?.projects || f?.list?.projects")
      .text-3xl.ml-4.py-8 Projects 
      .flex.flex-wrap.gap-4.mx-4() 
        ProjectCard.max-w-150(
          style="flex: 1 1 280px"
          v-for="project in [...(f?.projects || data?.projects)]?.sort((a,b)=> a?.sort>b?.sort ? 1 : -1)", :key="project" v-bind="project?.projects_id ? project.projects_id : project") 


    .flex.flex-col.gap-4.max-w-160.p-4(
      style="flex: 1 1 300px" 
      v-if="partners?.length>0") 
      .text-2xl.z-100.py-8 Partners
      PartnerCard(v-for="partner in partners", v-bind="partner?.partners_id")


    .flex.flex-col.gap-2(v-if="f?.list?.programs")
      .text-3xl.ml-4.p-4 Apply to our educational programs
      .flex.flex-wrap.gap-6.mx-2.my-8
        ProgramCard(
          v-for="program in data?.programs", :key="program" v-bind="program")

  //- a.flex.flex-wrap.gap-4.items-center.m-6(href="/")
    img.w-10(src="/logo.svg")
  MainNav.z-100.mt-8(style="flex: 1 1 100%" )

</template>

<style lang="postcss">
html {
  @apply bg-light-500;
}

html * {
  @apply transition duration-300;
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

  :is(h3) {
    font-size: 1.4em;
    @apply pt-2 px-4 leading-tight;
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