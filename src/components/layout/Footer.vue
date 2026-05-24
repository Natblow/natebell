<script setup lang="ts">
import { Mail, Phone } from '@lucide/vue'
import GithubIcon from '../icons/GithubIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import { useI18n } from 'vue-i18n'
import { siteMetadata } from '../../data/resume'

const { t } = useI18n()
</script>

<template>
  <footer id="contact" class="border-t border-white/5 py-16">
    <div class="container mx-auto max-w-5xl px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="glass rounded-2xl p-8 text-center md:p-12"
      >
        <h2 class="font-display mb-2 text-2xl font-bold text-white md:text-3xl">
          {{ t('footer.contact') }}
        </h2>
        <p class="mb-8 text-zinc-500">{{ siteMetadata.location }}</p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <a
            :href="`mailto:${siteMetadata.email}`"
            class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            <Mail class="h-4 w-4" />
            {{ siteMetadata.email }}
          </a>
          <a
            :href="`tel:${siteMetadata.phone.replace(/\D/g, '')}`"
            class="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-zinc-300 transition hover:text-white"
          >
            <Phone class="h-4 w-4" />
            {{ siteMetadata.phone }}
          </a>
          <a
            :href="siteMetadata.github"
            target="_blank"
            rel="noopener noreferrer"
            class="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-zinc-300 transition hover:text-white"
          >
            <GithubIcon class="h-4 w-4" />
            GitHub
          </a>
          <a
            :href="siteMetadata.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-zinc-300 transition hover:text-white"
          >
            <LinkedinIcon class="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <p class="mt-8 text-center text-xs text-zinc-600">
        © {{ new Date().getFullYear() }} {{ siteMetadata.name }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
