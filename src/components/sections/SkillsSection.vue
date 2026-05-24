<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SpotlightCard from '../bits/SpotlightCard.vue'
import { skillGroups } from '../../data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="relative py-24 md:py-32">
    <div class="container mx-auto max-w-5xl px-6">
      <span class="section-label">{{ t('nav.skills') }}</span>
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-4 font-display text-3xl font-bold text-white md:text-4xl"
      >
        {{ t('skills.title') }}
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { delay: 100, duration: 500 } }"
        class="mb-12 max-w-xl text-zinc-500"
      >
        {{ t('skills.intro') }}
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <SpotlightCard
          v-for="(group, index) in skillGroups"
          :key="group.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
        >
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            {{ t(group.labelKey) }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(item, i) in group.items"
              :key="item"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { delay: index * 100 + i * 30, duration: 300 } }"
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition hover:border-emerald-500/30 hover:text-emerald-300"
            >
              {{ item }}
            </span>
          </div>
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
