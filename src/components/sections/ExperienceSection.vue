<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SpotlightCard from '../bits/SpotlightCard.vue'
import { experience } from '../../data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="experience" class="relative py-24 md:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />

    <div class="container relative mx-auto max-w-5xl px-6">
      <span class="section-label">{{ t('nav.experience') }}</span>
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-4 font-display text-3xl font-bold text-white md:text-4xl"
      >
        {{ t('experience.title') }}
      </h2>
      <p class="mb-16 max-w-xl text-zinc-500">
        {{ t('experience.intro') }}
      </p>

      <div class="relative space-y-8">
        <div class="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-emerald-500/50 via-indigo-500/30 to-transparent md:block" />

        <SpotlightCard
          v-for="(entry, index) in experience"
          :key="entry.id"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: index * 120, duration: 500 } }"
          class="relative md:ml-10"
        >
          <div class="absolute -left-[2.35rem] top-8 hidden h-3 w-3 rounded-full border-2 border-emerald-400 bg-[#0a0a0f] md:block" />

          <div class="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 class="text-xl font-semibold text-white">
                {{ entry.company }}
              </h3>
              <p class="text-sm text-emerald-400">
                {{ t(entry.positionKey) }}
                <span v-if="entry.location" class="text-zinc-500"> · {{ entry.location }}</span>
                <span v-else-if="entry.locationKey" class="text-zinc-500"> · {{ t(entry.locationKey) }}</span>
              </p>
            </div>
            <span class="font-mono text-xs text-zinc-500">{{ entry.period }}</span>
          </div>

          <ul class="space-y-2">
            <li
              v-for="(key, hi) in entry.highlightKeys"
              :key="key"
              v-motion
              :initial="{ opacity: 0, x: 10 }"
              :visible-once="{ opacity: 1, x: 0, transition: { delay: index * 120 + hi * 60, duration: 400 } }"
              class="flex gap-3 text-sm leading-relaxed text-zinc-400"
            >
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              {{ t(key) }}
            </li>
          </ul>
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
