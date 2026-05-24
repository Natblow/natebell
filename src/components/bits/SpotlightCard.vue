<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  class?: string
}>()

const cardRef = ref<HTMLElement | null>(null)
const spotlight = ref({ x: 0, y: 0, opacity: 0 })

function onMove(e: MouseEvent) {
  const el = cardRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  spotlight.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    opacity: 1,
  }
}

function onLeave() {
  spotlight.value.opacity = 0
}
</script>

<template>
  <div
    ref="cardRef"
    class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20"
    :class="$props.class"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div
      class="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
      :style="{
        opacity: spotlight.opacity,
        background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(52,211,153,0.12), transparent 40%)`,
      }"
    />
    <slot />
  </div>
</template>
