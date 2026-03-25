<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// TODO: Ganti src icon di bawah dengan ikon ESG yang sesuai setelah didownload
// Rekomendasi nama file:
//   iconEnvironmental.svg  — ikon daun/pohon/ekosistem
//   iconSocial.svg         — ikon orang/komunitas
//   iconGovernance.svg     — ikon bangunan/dokumen/hukum
//
// Sementara menggunakan ikon yang sudah ada sebagai placeholder
import iconEnvironmental from '@/assets/icons/iconEnvironmental.svg'
import iconSocial from '@/assets/icons/iconSocial.svg'
import iconGovernance from '@/assets/icons/iconGovernance.svg'

useScrollReveal()

const pillars = [
  {
    icon: iconEnvironmental,
    iconAlt: 'Environmental icon',
    color: 'text-gray-500',
    title: 'Environmental',
    desc: 'Reducing our carbon footprint through renewable energy integration and zero-waste mining practices. We have reduced CO₂ emissions by 31% since 2019 while maintaining 110% of target production.',
    policies: ['Zero-waste water cycles', 'Topsoil preservation'],
  },
  {
    icon: iconSocial,
    iconAlt: 'Social icon',
    color: 'text-gray-500',
    title: 'Social',
    desc: 'Investing in local communities across all operational areas. Our social programs prioritize indigenous land rights, fair labor, and health infrastructure for surrounding populations.',
    policies: ['Local procurement policy', 'Safety first culture'],
  },
  {
    icon: iconGovernance,
    iconAlt: 'Governance icon',
    color: 'text-gray-500',
    title: 'Governance',
    desc: 'Upholding transparency and ethical conduct at every level. Our board-level ESG committee oversees compliance, risk management, and reporting aligned with GRI and SASB standards.',
    policies: ['Independent auditing', 'Anti-corruption code'],
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="max-w-2xl mb-14">
        <h2
          class="reveal font-newsreader text-primary font-normal mb-4"
          style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.05s"
        >
          Foundations of Responsibility
        </h2>
        <p class="reveal text-gray-500 text-[15px] leading-relaxed" style="transition-delay: 0.15s">
          Our ESG strategy is woven into every operational decision we make, ensuring that
          short-term value never compromises long-term responsibility.
        </p>
      </div>

      <!-- ── 3 Pilar ESG ─────────────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          class="reveal reveal--scale bg-gray-50 p-8 hover:shadow-md transition-shadow duration-300"
          :style="`transition-delay: ${0.1 + i * 0.1}s`"
        >
          <!-- Ikon -->
          <img :src="pillar.icon" :alt="pillar.iconAlt" class="w-9 h-9 mb-6 opacity-70" />

          <!-- Judul berwarna sesuai pilar -->
          <h3 :class="['text-[15px] font-bold tracking-wide mb-3', pillar.color]">
            {{ pillar.title }}
          </h3>

          <!-- Deskripsi -->
          <p class="text-gray-500 text-sm leading-relaxed mb-6">{{ pillar.desc }}</p>

          <!-- Policy list -->
          <ul class="space-y-2">
            <li
              v-for="policy in pillar.policies"
              :key="policy"
              class="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-gray-400 uppercase"
            >
              <span class="w-3 h-px bg-gold inline-block flex-shrink-0"></span>
              {{ policy }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
