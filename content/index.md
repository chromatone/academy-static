---
title: Academy
description: People are great in helping other people learn. We teach and inspire diving deep on music.
date: 2021-06-05
---

<script setup>
import { data } from '../db/academy.data'
</script>

## Welcome to Chromatone Academy!

This is a growing educational platform for learning and practicing music using our eyes. We are currently working in 4 main directions, forming 4 major educational programs. Each of them includes a number of research and design projects, that bring the experience to be shared in available materials, courses and educational sessions both online and offline. Stay tuned for more!

## Educational programs

<ProgramList class="my-8" :programs="data?.programs"/>

<MainPage />
