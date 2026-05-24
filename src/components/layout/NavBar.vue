<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocale } from '../../composables/useLocale'
import { siteMetadata } from '../../data/resume'

const { t } = useI18n()
const { switchLocale, otherLocale } = useLocale()

const navLinks = [
  { hash: 'about', key: 'nav.about' },
  { hash: 'skills', key: 'nav.skills' },
  { hash: 'experience', key: 'nav.experience' },
  { hash: 'projects', key: 'nav.projects' },
  { hash: 'contact', key: 'nav.contact' },
]
</script>

<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
    <nav class="container mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a href="#about" class="font-display text-lg font-bold text-white">
        NB<span class="text-emerald-400">.</span>
      </a>

      <div class="flex items-center gap-3 md:gap-5">
        <a
          v-for="link in navLinks"
          :key="link.hash"
          :href="`#${link.hash}`"
          class="hidden text-xs text-zinc-500 transition hover:text-emerald-400 md:inline"
        >
          {{ t(link.key) }}
        </a>

        <a
          :href="siteMetadata.resumePath"
          download
          class="hidden rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300 transition hover:border-emerald-500/30 hover:text-emerald-400 sm:inline"
        >
          {{ t('buttons.getMyCv') }}
        </a>

        <button
          type="button"
          class="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs uppercase text-zinc-400 transition hover:border-emerald-500/30 hover:text-emerald-400"
          @click="switchLocale(otherLocale())"
        >
          {{ otherLocale() }}
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
