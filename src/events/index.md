---
title: Events
description: Meetups, talks and performances
date: 2023-08-22
---


<script setup>
import { data } from '../../db/academy.data'
</script>

<EventList :events="data?.events" :projects="data?.projects"/>
