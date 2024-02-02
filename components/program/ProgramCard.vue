<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';
import { data } from '../../db/academy.data'
import { useData } from 'vitepress';



const { isDark } = useData()

const props = defineProps({
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  description: { type: String, default: '' },
  url: { type: String, default: '' },
  cover: { type: String, default: '' },
  poster: { type: String, default: '' },
  youtube_video: { type: String, default: '' },
  start_date: { type: String, default: '' },
  end_date: { type: String, default: '' },
  field: { type: Array, default: [] },
  projects: { type: Array, default: [] },
  sort: { type: Number, default: '' },
})

const color = computed(() => `oklch(${isDark.value ? 60 : 92}% .07 ${(props.sort - 1) * 360 / data?.programs.length} /.9 )`)


</script>

<template lang='pug'>
a.z-200.flex.flex-wrap.shadow-lg.hover-shadow-xl.transition.flex-1.dark-bg-dark-300.b-2.no-underline.rounded.p-0.bg-cover.bg-center.relative.border-0.grayscale-30.brightness-95.hover-grayscale-0.hover-brightness-100(class="p-0" :href="`/programs/${slug}/`"
:style="{backgroundImage:`url(/covers/${slug}.webp)`,borderColor:color}"
) 
  //- .p-0.min-w-50.h-70.relative.bg-cover.bg-center(style="flex: 1 1 "
    :style="{backgroundImage:`url(/covers/${slug}.webp)`}"
    )
  .text-3xl.text-white.p-4.m-4(:style="{backgroundColor:color}") {{ title }} 
  .glass.text-lg.leading-normal.opacity-80.flex-auto.p-4.max-w-100.m-4 {{ description }}

  .px-2.bg-light-500.dark-bg-dark-500.rounded.whitespace-nowrap.absolute.right-4.top-4(
    :style="{backgroundColor: color}"
    v-if="projects.length>0"
    ) {{ projects.length }} project{{ (projects.length % 10 === 1 && projects.length !== 11) ? '' : 's' }}

  .glass.flex.flex-col.p-4.gap-4.w-full.mt-60.m-4.max-w-100.mr-auto 

    .flex.gap-2.items-center.capitalize(v-if="field.length>0")
      .px-2.bg-light-800.dark-bg-dark-800.rounded(v-for="tag in field" :key="tag") {{ tag }} 


    a.p-4.text-xl.font-bold.text-center(
      :style="{backgroundColor:`oklch(${isDark ? 60 : 92}% .07 ${(sort-1)*360/data?.programs.length})`}"
      :href="`/programs/${slug}/#apply`"
      ) Apply now

</template>

<style scoped lang="postcss">
a {
  text-decoration: none;
  font-weight: unset;
}

.glass {
  @apply bg-light-200 bg-opacity-80 backdrop-blur dark-bg-dark-200 dark-bg-opacity-80
}
</style>