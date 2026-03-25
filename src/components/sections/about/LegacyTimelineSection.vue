<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const milestones = [
  {
    year: '1994',
    title: 'The Founding',
    desc: 'Aruna was established in the Halmahera basin by a group of Indonesian geologists and international mining veterans. First nickel extraction began within 18 months.',
    side: 'left',
  },
  {
    year: '2008',
    title: 'Regional Expansion',
    desc: 'Operations expanded into East Kalimantan with our sustainable coal concession, introducing our progressive rehabilitation framework that has become an industry benchmark.',
    side: 'right',
  },
  {
    year: '2023',
    title: 'Sustainability Hub',
    desc: 'Launched our dedicated ESG Operations Centre in Jakarta, consolidating all environmental monitoring, social impact programs, and governance reporting under one mandate by 2025.',
    side: 'left',
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="max-w-xl mb-16">
        <p
          class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
          style="transition-delay: 0.05s"
        >
          Legacy
        </p>
        <h2
          class="reveal font-newsreader text-primary font-normal leading-[1.1]"
          style="font-size: clamp(1.9rem, 3vw, 2.8rem); transition-delay: 0.15s"
        >
          A Journey of Precision &amp; Growth
        </h2>
        <p
          class="reveal text-gray-500 text-[15px] leading-relaxed mt-4"
          style="transition-delay: 0.22s"
        >
          Over three decades, Aruna Mineral has evolved from a single-site operation into a
          multi-asset minerals powerhouse, built on precision engineering and long-term
          environmental accountability.
        </p>
      </div>

      <!-- ── Timeline ────────────────────────────────────────────── -->
      <div class="relative">
        <!-- Garis tengah vertikal (desktop) -->
        <div
          class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"
        ></div>

        <div class="space-y-12 lg:space-y-0">
          <div
            v-for="(m, i) in milestones"
            :key="m.year"
            class="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:mb-16"
          >
            <!-- Dot di tengah (desktop) -->
            <div
              class="hidden lg:block absolute left-1/2 top-8 w-3 h-3 rounded-full border-2 border-gold bg-white -translate-x-1/2 z-10"
            ></div>

            <!-- Kolom kiri -->
            <div
              v-if="m.side === 'left'"
              class="reveal text-left lg:text-right pr-0 lg:pr-12"
              :style="`transition-delay: ${0.1 + i * 0.12}s`"
            >
              <p class="font-newsreader text-gold text-5xl font-light mb-2">{{ m.year }}</p>
              <h3 class="text-primary font-bold text-[15px] tracking-wide mb-2">{{ m.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ m.desc }}</p>
            </div>
            <div v-else class="hidden lg:block"></div>

            <!-- Kolom kanan -->
            <div
              v-if="m.side === 'right'"
              class="reveal text-left pl-0 lg:pl-12"
              :style="`transition-delay: ${0.1 + i * 0.12}s`"
            >
              <p class="font-newsreader text-gold text-5xl font-light mb-2">{{ m.year }}</p>
              <h3 class="text-primary font-bold text-[15px] tracking-wide mb-2">{{ m.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ m.desc }}</p>
            </div>
            <div v-else-if="m.side !== 'right'" class="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
