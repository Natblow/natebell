<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    delay?: number
    stagger?: number
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
    class?: string
  }>(),
  { delay: 0, stagger: 35, as: 'span' },
)

const visible = ref(false)
const chars = computed(() => props.text.split(''))

onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true
  })
})
</script>

<template>
  <component :is="as" :class="['inline-flex flex-wrap', props.class]" aria-label="text">
    <span
      v-for="(char, i) in chars"
      :key="`${char}-${i}`"
      class="inline-block transition-all duration-500 ease-out"
      :class="visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm'"
      :style="{ transitionDelay: `${delay + i * stagger}ms` }"
      aria-hidden="true"
    >
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </component>
</template>
