<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import iconGeological from '@/assets/icons/icongeological.svg'
import iconExtraction from '@/assets/icons/iconextration.svg'
import iconLogistic from '@/assets/icons/icongloballogistic.svg'

useScrollReveal()

const steps = [
  {
    number: '01',
    title: 'Geological Exploration',
    desc: 'Comprehensive sub-surface analysis using seismic imaging and drone-assisted mapping to identify mineral-rich deposits with minimal environmental disturbance.',
    icon: iconGeological,
  },
  {
    number: '02',
    title: 'Extraction & Refining',
    desc: 'Ultrapure single-step processes combined with next-generation flotation technology to meet international-grade manufacturing standards.',
    icon: iconExtraction,
  },
  {
    number: '03',
    title: 'Global Logistics',
    desc: 'Integrated end-to-end supply chain infrastructure from secure warehousing to multimodal shipping networks reaching key industrial hubs worldwide.',
    icon: iconLogistic,
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-primary overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
        <div>
          <p
            class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
            style="transition-delay: 0.05s"
          >
            Our Process
          </p>
          <h2
            class="reveal font-newsreader text-white font-normal leading-[1.1] max-w-lg"
            style="font-size: clamp(1.9rem, 3.2vw, 2.8rem); transition-delay: 0.15s"
          >
            Comprehensive value chain, from exploration to global delivery.
          </h2>
          <p
            class="reveal text-white/50 text-sm mt-4 max-w-md leading-relaxed"
            style="transition-delay: 0.22s"
          >
            Our integrated operational model ensures consistent quality and traceability at every
            stage, supporting clients across energy, technology, and construction sectors.
          </p>
        </div>

        <a
          href="#"
          class="reveal text-[10px] font-bold tracking-[0.18em] text-gold border border-gold/40 px-6 py-3 hover:bg-gold/10 transition-colors duration-300 self-start lg:self-auto whitespace-nowrap"
          style="transition-delay: 0.28s"
        >
          DOWNLOAD SERVICES BROCHURE →
        </a>
      </div>

      <!-- ── Step Cards ──────────────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="reveal bg-primary p-8 lg:p-10 hover:bg-primary-hover transition-colors duration-300 group"
          :style="`transition-delay:${0.1 + i * 0.1}s`"
        >
          <div class="flex items-start justify-between mb-8">
            <span class="font-newsreader text-gold/60 text-5xl font-light leading-none">
              {{ step.number }}
            </span>
            <img
              :src="step.icon"
              :alt="step.title"
              class="w-9 h-9 opacity-60 invert group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>
          <h3 class="text-white font-bold text-[15px] tracking-wide mb-3">
            {{ step.title }}
          </h3>
          <p class="text-white/50 text-sm leading-relaxed">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
