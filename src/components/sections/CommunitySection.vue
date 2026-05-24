<script setup lang="ts">
import { Heart, Users } from '@lucide/vue'
import { useI18n } from 'vue-i18n'
import SpotlightCard from '../bits/SpotlightCard.vue'
import { communityItems } from '../../data/resume'

const { t } = useI18n()

const icons = { conferences: Users, mentor: Heart } as const
</script>

<template>
  <section class="py-24 md:py-32">
    <div class="container mx-auto max-w-5xl px-6">
      <span class="section-label">{{ t('community.title') }}</span>
      <h2 class="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
        {{ t('community.title') }}
      </h2>
      <p class="mb-12 text-zinc-500">{{ t('community.intro') }}</p>

      <div class="grid gap-6 md:grid-cols-2">
        <SpotlightCard
          v-for="(item, index) in communityItems"
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="flex gap-4"
        >
          <component :is="icons[item.id]" class="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
          <p class="text-sm leading-relaxed text-zinc-400">{{ t(item.key) }}</p>
        </SpotlightCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
