<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="bg-primary py-16 lg:py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="reveal flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        style="transition-delay: 0.1s"
      >
        <!-- ── Teks ──────────────────────────────────────────────── -->
        <div class="max-w-xl">
          <h2
            class="font-newsreader text-white font-normal leading-tight mb-3"
            style="font-size: clamp(1.5rem, 2.5vw, 2rem)"
          >
            Annual Sustainability &amp; ESG Report 2023
          </h2>
          <p class="text-white/50 text-sm leading-relaxed">
            Full transparency on our environmental impact, social initiatives, and governance
            commitments to drive the standard of tomorrow.
          </p>
        </div>

        <!-- ── Tombol Download ────────────────────────────────────── -->
        <a
          href="#"
          class="flex items-center gap-3 bg-gold text-primary text-[11px] font-bold tracking-[0.18em] px-7 py-4 whitespace-nowrap flex-shrink-0 hover:bg-gold-hover transition-colors duration-200 group"
        >
          DOWNLOAD PDF (7.5 MB)
          <svg
            class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
