<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import iconPrecision from '@/assets/icons/iconPrecision.svg'
import iconSafety from '@/assets/icons/iconSafetyFirst.svg'
import iconEfficiency from '@/assets/icons/iconEfficiency.svg'
import iconInnovation from '@/assets/images/inovation.png'
import iconPlanned from '@/assets/icons/iconPlannedLand.svg'

useScrollReveal()
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="mb-12">
        <p
          class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-3"
          style="transition-delay: 0.05s"
        >
          Core Capabilities
        </p>
        <h2
          class="reveal font-newsreader text-primary font-normal"
          style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.15s"
        >
          Operational Excellence
        </h2>
      </div>

      <!-- ── Grid Kartu ──────────────────────────────────────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <!-- Kartu Besar Kiri: Precision Extraction -->
        <div
          class="reveal reveal--left bg-primary text-white p-8 lg:p-10 flex flex-col justify-between min-h-[320px]"
          style="transition-delay: 0.2s"
        >
          <div class="flex justify-end">
            <img
              :src="iconPrecision"
              alt="Precision icon"
              class="w-20 h-20 brightness-0 invert opacity-40"
            />
          </div>
          <div class="mt-8">
            <h3 class="font-newsreader text-2xl font-light mb-3 leading-snug">
              Precision Extraction Technology
            </h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Implementing state-of-the-art extraction methodologies combining precision engineering
              and real-time monitoring to maximize yield while minimizing environmental footprint.
            </p>
          </div>
        </div>

        <!-- Kolom Kanan: 3 kartu kecil -->
        <div class="flex flex-col gap-5">
          <!-- Baris atas: Safety + Efficiency -->
          <div class="grid grid-cols-2 gap-5">
            <div
              class="reveal bg-white border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              style="transition-delay: 0.25s"
            >
              <img :src="iconSafety" alt="Safety icon" class="w-8 h-8 mb-4" />
              <h4 class="text-primary text-[13px] font-bold tracking-wide mb-2">Safety First</h4>
              <p class="text-gray-400 text-xs leading-relaxed">
                Zero-compromise safety culture with ISO 45001 certification and continuous workforce
                training programs.
              </p>
            </div>
            <div
              class="reveal bg-white border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              style="transition-delay: 0.32s"
            >
              <img :src="iconEfficiency" alt="Efficiency icon" class="w-8 h-8 mb-4" />
              <h4 class="text-primary text-[13px] font-bold tracking-wide mb-2">Efficiency</h4>
              <p class="text-gray-400 text-xs leading-relaxed">
                98.4% operational uptime through predictive maintenance and digital twin
                optimization systems.
              </p>
            </div>
          </div>

          <!-- Baris bawah: Innovation -->
          <div
            class="reveal reveal--right bg-white border border-gray-100 p-6 flex items-start gap-5 hover:shadow-md transition-shadow duration-300"
            style="transition-delay: 0.38s"
          >
            <img
              :src="iconInnovation"
              alt="Innovation"
              class="w-16 h-16 object-cover rounded-sm flex-shrink-0"
            />
            <div>
              <h4 class="text-primary text-[13px] font-bold tracking-wide mb-2">Innovation</h4>
              <p class="text-gray-400 text-xs leading-relaxed">
                Proprietary solutions for high-value mineral processing and new mineral discovery
                through AI-assisted geological surveys.
              </p>
            </div>
          </div>
        </div>

        <!-- Kartu Bawah Full-width: Planned Land Rehabilitation -->
        <div
          class="reveal reveal--scale lg:col-span-2 bg-white border border-gray-100 p-6 lg:p-8 flex items-center gap-6 hover:shadow-md transition-shadow duration-300"
          style="transition-delay: 0.44s"
        >
          <img :src="iconPlanned" alt="Land rehabilitation icon" class="w-10 h-10 flex-shrink-0" />
          <div>
            <h4 class="text-primary text-[13px] font-bold tracking-wide mb-1">
              Planned Land Rehabilitation
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Systematic post-mining restoration returning productive land to local communities
              through indigenous reforestation and sustainable agriculture programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
