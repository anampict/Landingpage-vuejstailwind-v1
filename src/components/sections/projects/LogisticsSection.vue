<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import logisticsImage from '@/assets/images/logistic.jpg'

//
// 2. Ikon logistik (opsional, sudah ada bisa dipakai):
//    import iconLogistic from '@/assets/icons/icongloballogistic.svg'

import iconLogistic from '@/assets/icons/icongloballogistic.svg'

useScrollReveal()

const networkHubs = ['Singapore', 'Rotterdam', 'Shanghai']

const logisticsPoints = [
  {
    number: '01',
    title: 'On-site Processing',
    desc: 'Refining at the source to minimize transport volume and carbon footprint.',
  },
  {
    number: '02',
    title: 'Strategic Rail Links',
    desc: 'Dedicated infrastructure connecting remote assets to maritime terminals.',
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- ── Kolom Kiri: Gambar + Network Hubs card ─────────────── -->
        <div class="relative reveal reveal--left" style="transition-delay: 0.1s">
          <!-- Gambar utama -->
          <div class="aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              :src="logisticsImage"
              alt="Port logistics network"
              class="w-full h-full object-cover"
              style="transform: translateZ(0)"
            />
          </div>

          <!-- Card: Network Hubs -->
          <div
            class="absolute bottom-0 right-0 lg:-right-6 bg-white border border-gray-100 shadow-lg p-6 max-w-[240px]"
          >
            <div class="flex items-center gap-2 mb-3">
              <img :src="iconLogistic" alt="Logistics icon" class="w-6 h-6 opacity-60" />
              <p class="text-[10px] font-bold tracking-[0.18em] text-gold uppercase">
                Network Hubs
              </p>
            </div>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">
              Direct pipeline from extraction points to deep-water ports in:
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="hub in networkHubs"
                :key="hub"
                class="text-[10px] font-bold tracking-[0.14em] text-primary border border-primary/20 px-2.5 py-1"
              >
                {{ hub }}
              </span>
            </div>
          </div>
        </div>

        <!-- ── Kolom Kanan: Teks ─────────────────────────────────── -->
        <div class="lg:pl-6">
          <p
            class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
            style="transition-delay: 0.15s"
          >
            Supply Chain Mastery
          </p>

          <h2
            class="reveal font-newsreader text-primary font-normal leading-[1.1] mb-5"
            style="font-size: clamp(1.9rem, 3.2vw, 2.8rem); transition-delay: 0.22s"
          >
            Integrated Logistics<br />
            <em>Network</em>
          </h2>

          <p
            class="reveal text-gray-500 text-[15px] leading-relaxed mb-10"
            style="transition-delay: 0.3s"
          >
            Our projects aren't just isolated mines—they are nodes in a global web of efficiency. We
            manage the entire lifecycle from the ground to the global marketplace.
          </p>

          <!-- Poin logistik -->
          <div class="space-y-7">
            <div
              v-for="(point, i) in logisticsPoints"
              :key="point.number"
              class="reveal flex gap-5"
              :style="`transition-delay: ${0.35 + i * 0.1}s`"
            >
              <span
                class="font-newsreader text-gold/60 text-3xl font-light leading-none flex-shrink-0 mt-0.5"
              >
                {{ point.number }}
              </span>
              <div>
                <h4 class="text-primary text-[13px] font-bold tracking-wide mb-1">
                  {{ point.title }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed">{{ point.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
