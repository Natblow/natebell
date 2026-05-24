<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ExternalLink } from '@lucide/vue'
import SpotlightCard from '../bits/SpotlightCard.vue'
import { education } from '../../data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="education" class="py-24 md:py-32">
    <div class="container mx-auto max-w-5xl px-6">
      <span class="section-label">{{ t('nav.education') }}</span>
      <h2 class="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
        {{ t('education.title') }}
      </h2>
      <p class="mb-12 text-zinc-500">{{ t('education.intro') }}</p>

      <SpotlightCard
        v-for="entry in education"
        :key="entry.id"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="font-mono text-xs text-emerald-400">{{ entry.period }}</p>
            <h3 class="mt-2 text-xl font-semibold text-white">{{ entry.institution }}</h3>
            <p class="mt-1 text-zinc-400">{{ t(entry.programKey) }}</p>
            <p class="mt-1 text-sm text-zinc-500">{{ t(entry.locationKey) }}</p>
          </div>
          <a
            :href="entry.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-sm text-zinc-400 transition hover:text-emerald-400"
          >
            {{ t('education.seeThePlace') }}
            <ExternalLink class="h-3.5 w-3.5" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
