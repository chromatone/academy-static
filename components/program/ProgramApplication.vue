<script setup>
import timezones from 'timezones-list';
import { reactive, ref, onMounted, watch } from 'vue';

import { createDirectus, rest, staticToken, readItem, readItems } from '@directus/sdk'

const props = defineProps({
  programId: { type: String, default: 'eb91e563-4c26-4caf-84e2-6b17863d4008' }
})

const searchParams = ref('')

const program = ref('')

const timezone = ref()

const u = reactive({
  first_name: '',
  last_name: '',
  email: '',
  discord_username: '',
  country: '',
  city: '',
  comment: '',
  timezone: computed(() => timezone.value?.utc || ''),
  program: computed(() => program.value?.id || '')
})

onMounted(async () => {
  searchParams.value = new URLSearchParams(window.location.search);
  const slug = searchParams.value.get('p')
  const client = createDirectus('https://db.chromatone.center/').with(rest())
  program.value = await client.request(readItem('programs', props.programId))
})


onMounted(() => {
  let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timezone.value = timezones.find(val => val.tzCode == tz)
})

const valid = computed(() => u.first_name && u.last_name && u.email && u.country && u.city && u.timezone)

async function sendApplication() {
  try {
    const apply = await fetch(
      'https://db.chromatone.center/flows/trigger/fd79e220-bcf4-49b0-93d6-e70f206306dd',
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(u),
      });

    console.log(await apply?.json())
  } catch (e) {
    console.error(e, e?.errors?.[0]?.message, e?.response?.status)
  }
}

</script>

<template lang='pug'>

form.grid.grid-cols-3.gap-4.p-4(
  @submit.prevent.stop="sendApplication()"
  style="grid-template-columns: 1fr 2fr 1fr"
  ) 

  h2.col-span-3 Program application form 
  label(for="program") Program
  input#program.col-span-2.opacity-50(disabled type="text" v-model="program.title")

  label(for="first_name") First Name*
  input#first_name.col-span-2(
    type="text" v-model="u.first_name"
    placeholder="Type in your first name"
    )

  label(for="last_name") Last Name*
  input#last_name.col-span-2(
    type="text" v-model="u.last_name"
    placeholder="And your last name"
    )

  label(for="email") Email*
  input#email.col-span-2(
    type="text" v-model="u.email"
    placeholder="your@gmail.com"
    )

  label(for="discord_username") Discord username
  input#discord_username.col-span-2(
    type="text" v-model="u.discord_username"
    placeholder="We will invite you to our server"
    )

  label(for="city") City*
  input#city.col-span-2(
    type="text" v-model="u.city"
    placeholder="What city are you from?"
    )

  label(for="country") Country*
  input#country.col-span-2(
    type="text" v-model="u.country"
    placeholder="What country?"
    )

  label(for="timezone") Timezone*
  select.col-span-2(v-model="timezone")
    option(
      v-for="tz in timezones" :key="tz" :selected="u.timezone.name == tz.name" :value="tz"
      ) {{ tz.label }} 

  label(for="country") Comment
  textarea#country.col-span-2(
    type="text" v-model="u.comment"
    placeholder="Describe your music skillset and goals that you want to achieve with by participating in the program"
    )
  .text-lg.col-span-3.p-4.font-italic I want to participate in the educational program as a student. I am OK with paying for such service. Please, add me to the wait list.

  button.col-span-3.text-xl.p-4.bg-light-900.dark-bg-dark-700.disabled-opacity-50.rounded-xl(type="submit" :disabled="!valid") {{ valid ? 'Submit your application' :`Please, fill in all the required fields` }}
  //- pre {{ u }}
</template>

<style scoped lang="postcss">
label {
  @apply flex items-center font-bold justify-end text-right;
}

input,
select,
textarea {
  @apply p-2 rounded dark-bg-dark-500 border-1 border-dark-100/40 dark-border-light-900/40;
}
</style>