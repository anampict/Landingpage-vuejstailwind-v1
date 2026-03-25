<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import iconInnovation from '@/assets/icons/iconPrecision.svg'
import iconSafety from '@/assets/icons/iconSafetyFirst.svg'
import iconResponsibility from '@/assets/icons/iconGovernance.svg'

useScrollReveal()

const principles = [
  {
    icon: iconInnovation,
    title: 'Innovation',
    desc: 'We invest relentlessly in extraction technology and geological science, pushing the frontier of what efficient and clean mining can achieve.',
    active: false,
  },
  {
    icon: iconSafety,
    title: 'Safety',
    desc: 'A zero-incident culture is a non-negotiable standard for every mine, every process, and every person who carries our name.',
    active: false,
  },
  {
    icon: iconResponsibility,
    title: 'Responsibility',
    desc: 'Extracting value from the earth imposes obligations. We honour those obligations through community investment, land restoration, and transparent governance.',
    active: false,
  },
]
</script>

<template>
  <section class="bg-primary py-20 lg:py-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header row ─────────────────────────────────────────── -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <p
            class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
            style="transition-delay: 0.05s"
          >
            Our DNA
          </p>
          <h2
            class="reveal font-newsreader text-white font-normal"
            style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.15s"
          >
            Defined by Principles
          </h2>
        </div>
        <p
          class="reveal text-white/50 text-sm leading-relaxed max-w-sm"
          style="transition-delay: 0.22s"
        >
          We don't operate by compliance—we operate by conviction. Three principles form the
          unchanging foundation of everything Aruna does.
        </p>
      </div>

      <!-- ── Kartu Prinsip ──────────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
        <div
          v-for="(p, i) in principles"
          :key="p.title"
          class="reveal p-8 lg:p-10 transition-colors duration-300"
          :class="p.active ? 'bg-gold/20' : 'bg-primary hover:bg-primary-hover'"
          :style="`transition-delay: ${0.1 + i * 0.1}s`"
        >
          <img
            :src="p.icon"
            :alt="p.title + ' icon'"
            class="w-9 h-9 mb-7 brightness-0 invert opacity-50"
          />
          <h3
            class="font-bold text-[15px] tracking-wide mb-3"
            :class="p.active ? 'text-gold' : 'text-white'"
          >
            {{ p.title }}
          </h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
