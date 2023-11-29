---
title: Partners
description: Companies and spaces take part in the Chromatone journey
date: 2022-01-23
cover: hannah-busing.jpg
---

<script setup>
import { data } from '../../db/academy.data'
</script>

<div class="flex m-4 flex-wrap gap-4 max-w-150">
<PartnerCard v-for="partner in data.partners" v-bind="partner" > {{partner}}</PartnerCard>
</div>
