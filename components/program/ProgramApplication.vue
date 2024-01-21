<script setup>
import timezones from 'timezones-list';
import { reactive, ref, onMounted, watch } from 'vue';

const props = defineProps({
  program: { type: Object, default: { title: 'none' } }
})

const timezone = ref()

const u = reactive({
  first_name: '',
  last_name: '',
  email: '',
  discord_username: '',
  country: '',
  city: '',
  timezone: computed(() => timezone.value?.utc || ''),
  program: computed(() => props.program?.id || '')
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
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(u), // body data type must match "Content-Type" header
      });

    console.log(await apply?.json())
  } catch (e) {
    console.error(e, e?.errors?.[0]?.message, e?.response?.status)
  }
}

</script>

<template lang='pug'>
details.bg-light-600.dark-bg-dark-100.border-1.shadow.rounded-xl.m-2
  summary.p-4.text-2xl Apply for the program now
  form.grid.grid-cols-3.gap-4.p-2(
    @submit.prevent.stop="sendApplication()"
    style="grid-template-columns: 1fr 2fr 1fr"
    ) 
    h2.col-span-3 Application form 

    label(for="program") Program
    input#program.col-span-2.opacity-50(disabled type="text" v-model="program.title")

    label(for="first_name") First Name*
    input#first_name.col-span-2(
      type="text" v-model="u.first_name"
      placeholder="Type your name"
      )

    label(for="last_name") Last Name*
    input#last_name.col-span-2(
      type="text" v-model="u.last_name"
      placeholder="Your last name"
      )

    label(for="email") Email*
    input#email.col-span-2(
      type="text" v-model="u.email"
      placeholder="your@gmail.com"
      )

    label(for="discord_username") Discord username
    input#discord_username.col-span-2(
      type="text" v-model="u.discord_username"
      placeholder="We use Discord for communication"
      )

    label(for="city") City*
    input#city.col-span-2(
      type="text" v-model="u.city"
      placeholder="Your city"
      )

    label(for="country") Country*
    input#country.col-span-2(
      type="text" v-model="u.country"
      placeholder="Your country"
      )

    label(for="timezone") Timezone*
    select.col-span-2(v-model="timezone")
      option(
        v-for="tz in timezones" :key="tz" :selected="u.timezone.name == tz.name" :value="tz"
        ) {{ tz.label }} 

    .text-lg.col-span-3.p-4.font-italic I want to participate in the educational program as a student. I am OK with paying for such service. Please, add me to the wait list.

    button.col-span-3.text-xl.p-4.bg-light-900.dark-bg-dark-700.disabled-opacity-50.rounded-xl(type="submit" :disabled="!valid") Submit application
    //- pre {{ u }}
</template>

<style scoped lang="postcss">
label {
  @apply flex items-center font-bold justify-end text-right;
}

input,
select {
  @apply p-2 rounded dark-bg-dark-500;
}
</style>