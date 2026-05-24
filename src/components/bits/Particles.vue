<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    quantity?: number
    color?: string
  }>(),
  { quantity: 80, color: '34, 211, 153' },
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId = 0
let observer: ResizeObserver | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let particles: Particle[] = []

  function resize() {
    const dpr = devicePixelRatio
    canvas!.width = canvas!.offsetWidth * dpr
    canvas!.height = canvas!.offsetHeight * dpr
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  function init() {
    particles = Array.from({ length: props.quantity }, () => ({
      x: Math.random() * canvas!.offsetWidth,
      y: Math.random() * canvas!.offsetHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  }

  function draw() {
    const w = canvas!.offsetWidth
    const h = canvas!.offsetHeight
    ctx!.clearRect(0, 0, w, h)

    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1

      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx!.fillStyle = `rgba(${props.color}, ${p.opacity})`
      ctx!.fill()
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i]!
        const b = particles[j]!
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx!.beginPath()
          ctx!.moveTo(a.x, a.y)
          ctx!.lineTo(b.x, b.y)
          ctx!.strokeStyle = `rgba(${props.color}, ${0.08 * (1 - dist / 120)})`
          ctx!.lineWidth = 0.5
          ctx!.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(draw)
  }

  resize()
  init()
  draw()

  observer = new ResizeObserver(() => {
    resize()
    init()
  })
  observer.observe(canvas)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  observer?.disconnect()
})
</script>

<template>
  <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 h-full w-full" />
</template>
