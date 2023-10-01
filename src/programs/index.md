---
title: Programs
description: In an academic context, a program usually refers to a series of courses that lead to a specific degree or certification 
date: 2023-08-23
---

<script setup>
import { data } from '../../db/academy.data'
</script>

<ProgramList :programs="data?.programs"/>
