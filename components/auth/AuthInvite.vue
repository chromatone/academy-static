<script setup>
import { useUser } from '../../composables/useUser.js';

const { email, claimInvite } = useUser()

</script>

<template lang='pug'>
label.text-lg(for="email") E-mail*:
  input.rounded-lg.p-2.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-inner.dark-bg-dark-200(id="email" type="text" v-model="email")
button.text-xl.font-bold.rounded-lg.p-4.border-2.border-solid.dark-border-light-300.border-dark-800.shadow-lg.dark-bg-dark-200(type="submit" @click="claimInvite()") Claim Invite
</template>
