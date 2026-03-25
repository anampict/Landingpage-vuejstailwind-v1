<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import truckImage from '@/assets/images/miningtruck.jpg'

import iconStatus from '@/assets/icons/icongeological.svg'

useScrollReveal()

const projectStatuses = [
  { name: 'Halmahera', status: 'PRODUCTION', color: 'bg-emerald-500 text-white' },
  { name: 'Kalimantan', status: 'PRODUCTION', color: 'bg-emerald-500 text-white' },
  { name: 'W. Australia', status: 'EXPLORATION', color: 'bg-amber-400 text-primary' },
  { name: 'Papua — next', status: 'DEVELOPMENT', color: 'bg-blue-400 text-white' },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="text-center mb-16">
        <p
          class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-3"
          style="transition-delay: 0.05s"
        >
          Operational Insight
        </p>
        <h2
          class="reveal font-newsreader text-primary font-normal"
          style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.15s"
        >
          Technical Performance
        </h2>
      </div>

      <!-- ── Grid ───────────────────────────────────────────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        <!-- Kolom 1: Scale & Capacity teks -->
        <div
          class="reveal reveal--left bg-white border border-gray-100 p-8 lg:p-10"
          style="transition-delay: 0.2s"
        >
          <h3 class="font-newsreader text-primary text-2xl font-light mb-4 leading-snug">
            Scale &amp; Capacity
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-8">
            Our infrastructure is built for high-throughput consistency, ensuring long-term
            reliability for our global partners.
          </p>
          <div class="flex gap-8">
            <div>
              <p class="font-newsreader text-primary text-4xl font-light">150M</p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mt-1">
                Tons Per Annum
              </p>
            </div>
            <div class="border-l border-gray-200 pl-8">
              <p class="font-newsreader text-primary text-4xl font-light">98.2%</p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mt-1">
                Operational Uptime
              </p>
            </div>
          </div>
        </div>

        <!-- Kolom 2: Foto truk -->
        <div
          class="reveal bg-gray-200 overflow-hidden aspect-[4/3]"
          style="transition-delay: 0.28s"
        >
          <img
            :src="truckImage"
            alt="Mining truck operations"
            class="w-full h-full object-cover"
            style="transform: translateZ(0)"
          />
        </div>

        <!-- Kolom 3: Project Status card -->
        <div class="reveal reveal--right bg-primary text-white p-8" style="transition-delay: 0.35s">
          <div class="flex items-center gap-3 mb-6">
            <img
              :src="iconStatus"
              alt="Project status icon"
              class="w-7 h-7 brightness-0 invert opacity-60"
            />
            <h4 class="text-[13px] font-bold tracking-wide">Project Status</h4>
          </div>

          <ul class="space-y-4">
            <li
              v-for="proj in projectStatuses"
              :key="proj.name"
              class="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
            >
              <span class="text-white/70 text-sm">{{ proj.name }}</span>
              <span class="text-[9px] font-bold tracking-[0.18em] px-3 py-1" :class="proj.color">
                {{ proj.status }}
              </span>
            </li>
          </ul>

          <a
            href="#"
            class="block mt-6 text-[10px] font-bold tracking-[0.18em] text-gold hover:text-gold-hover transition-colors duration-200"
          >
            VIEW FULL PORTFOLIO →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
