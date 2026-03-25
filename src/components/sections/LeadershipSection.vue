<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import imgAria from '@/assets/images/imagearia.png'
import imgDarmawan from '@/assets/images/imagedarmawan.png'
import imgSariKencana from '@/assets/images/imagesarikencana.png'
import imgDermawan from '@/assets/images/imagedermawan.png'

useScrollReveal()

const leaders = [
  {
    name: 'Aria Winarini',
    role: 'President Director',
    image: imgAria,
  },
  {
    name: 'Damasiatu Putra',
    role: 'Operations Director',
    image: imgDarmawan,
  },
  {
    name: 'Yari Kencana',
    role: 'Sustainability Director',
    image: imgSariKencana,
  },
  {
    name: 'Bambang Hariyadi',
    role: 'Finance Director',
    image: imgDermawan,
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <h2
        class="reveal font-newsreader text-primary font-normal mb-12"
        style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.05s"
      >
        Visionary Leadership
      </h2>

      <!-- ── Grid Leader ─────────────────────────────────────────── -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7">
        <div
          v-for="(leader, i) in leaders"
          :key="leader.name"
          class="reveal reveal--scale group"
          :style="`transition-delay:${0.1 + i * 0.1}s`"
        >
          <!-- Foto -->
          <div class="overflow-hidden aspect-[3/4] mb-4">
            <img
              :src="leader.image"
              :alt="leader.name"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
            />
          </div>
          <!-- Info -->
          <h4 class="text-primary font-bold text-[14px] tracking-wide">{{ leader.name }}</h4>
          <p class="text-[10px] font-semibold tracking-[0.18em] text-gold uppercase mt-1">
            {{ leader.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
