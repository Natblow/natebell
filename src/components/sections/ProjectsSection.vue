<script setup lang="ts">
import { Sparkles } from '@lucide/vue'
import { useI18n } from 'vue-i18n'
import { projects } from '../../data/projects'
import { siteMetadata } from '../../data/resume'
import SpotlightCard from '../bits/SpotlightCard.vue'
import GithubIcon from '../icons/GithubIcon.vue'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="py-24 md:py-32">
    <div class="container mx-auto max-w-5xl px-6">
      <span class="section-label">{{ t('nav.projects') }}</span>
      <h2 class="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
        {{ t('projects.title') }}
      </h2>
      <p class="mb-12 text-zinc-500">{{ t('projects.description') }}</p>

      <div v-if="projects.length > 0" class="grid gap-6 md:grid-cols-2">
        <SpotlightCard
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
        >
          <h3 class="mb-2 text-lg font-semibold text-white">{{ t(project.titleKey) }}</h3>
          <p class="mb-4 text-sm text-zinc-400">{{ t(project.descriptionKey) }}</p>
          <div v-if="project.tags.length" class="mb-4 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-400"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex gap-4">
            <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="text-sm text-emerald-400 hover:underline">Live</a>
            <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener noreferrer" class="text-sm text-emerald-400 hover:underline">GitHub</a>
          </div>
        </SpotlightCard>
      </div>

      <SpotlightCard
        v-else
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
        class="text-center"
      >
        <Sparkles class="mx-auto mb-4 h-10 w-10 text-emerald-400/60" />
        <h3 class="mb-3 text-xl font-semibold text-white">{{ t('projects.emptyTitle') }}</h3>
        <p class="mx-auto mb-6 max-w-md text-sm text-zinc-500">{{ t('projects.emptyDescription') }}</p>
        <a
          :href="siteMetadata.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition hover:border-emerald-500/30 hover:text-emerald-400"
        >
          <GithubIcon class="h-4 w-4" />
          github.com/Natblow
        </a>
      </SpotlightCard>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
