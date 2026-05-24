<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Mail, MapPin } from '@lucide/vue'
import AuroraBackground from '../bits/AuroraBackground.vue'
import Particles from '../bits/Particles.vue'
import SplitText from '../bits/SplitText.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import { siteMetadata } from '../../data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="relative flex min-h-screen items-center overflow-hidden">
    <AuroraBackground />
    <Particles :quantity="60" />

    <div class="relative z-10 container mx-auto max-w-5xl px-6 py-32">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="section-label mb-6"
      >
        {{ t('hero.greeting') }}
      </p>

      <SplitText
        :text="siteMetadata.name"
        as="h1"
        class="font-display mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
        :stagger="40"
      />

      <SplitText
        :text="t('hero.title')"
        as="h2"
        class="text-gradient mb-8 text-3xl font-semibold md:text-5xl"
        :delay="400"
        :stagger="30"
      />

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
        class="mb-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
      >
        {{ t('hero.introduction') }}
      </p>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 1000, duration: 500 } }"
        class="mb-10 flex items-center gap-2 text-sm text-zinc-500"
      >
        <MapPin class="h-4 w-4 text-emerald-400" />
        {{ t('hero.location') }}
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1100, duration: 500 } }"
        class="flex flex-wrap gap-4"
      >
        <a
          :href="`mailto:${siteMetadata.email}`"
          class="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
        >
          <Mail class="h-4 w-4" />
          {{ t('buttons.hireMe') }}
        </a>
        <a
          :href="siteMetadata.resumePath"
          download
          class="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          {{ t('buttons.getMyCv') }}
        </a>
        <a
          :href="siteMetadata.github"
          target="_blank"
          rel="noopener noreferrer"
          class="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          <GithubIcon class="h-4 w-4" />
          {{ t('buttons.viewGithub') }}
        </a>
        <a
          :href="siteMetadata.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          <LinkedinIcon class="h-4 w-4" />
          {{ t('buttons.viewLinkedin') }}
        </a>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1500, duration: 800 } }"
      class="animate-float absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div class="h-12 w-6 rounded-full border-2 border-white/20 p-1">
        <div class="mx-auto h-2 w-1 animate-bounce rounded-full bg-emerald-400" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
