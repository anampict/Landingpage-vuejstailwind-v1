<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// Foto board member sudah ada di folder images:
import imgAria from '@/assets/images/imagearia.png'
import imgDarmawan from '@/assets/images/imagedarmawan.png'
import imgDermawan from '@/assets/images/imagedermawan.png'
//
// TODO: Tambahkan foto board member tambahan jika ada
// import imgBoard4 from '@/assets/images/imageboard4.jpg'
//   → Rekomendasi: foto profesional formal,  min 600×800px

useScrollReveal()

const boardMembers = [
  {
    name: 'Adrian Aruna',
    role: 'Chief Executive Officer',
    image: imgAria,
    bio: 'Founder and visionary leader of Aruna Mineral since 1994. 30+ years driving sustainable mineral extraction across Southeast Asia.',
  },
  {
    name: 'Sarah Whitmore',
    role: 'Chief Operations Officer',
    image: imgDarmawan,
    bio: 'Expert in operational scaling with experience across 4 continents. Led the Halmahera facility expansion that tripled production capacity.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Sustainability Director',
    image: imgDermawan,
    bio: "Environmental engineer and ESG architect. Designed Aruna's award-winning land rehabilitation programme adopted across the industry.",
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="text-center mb-14">
        <p
          class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
          style="transition-delay: 0.05s"
        >
          The Board
        </p>
        <h2
          class="reveal font-newsreader text-primary font-normal"
          style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.15s"
        >
          Strategic Leadership
        </h2>
        <!-- Aksen garis emas -->
        <div class="reveal flex justify-center mt-4" style="transition-delay: 0.22s">
          <span class="w-12 h-0.5 bg-gold"></span>
        </div>
      </div>

      <!-- ── Grid Board Members ──────────────────────────────────── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="(member, i) in boardMembers"
          :key="member.name"
          class="reveal reveal--scale group"
          :style="`transition-delay: ${0.1 + i * 0.12}s`"
        >
          <!-- Foto -->
          <div class="overflow-hidden aspect-[3/4] mb-5 bg-gray-200">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              style="transform: translateZ(0)"
            />
          </div>

          <!-- Info -->
          <h3 class="text-primary font-bold text-[15px] tracking-wide">{{ member.name }}</h3>
          <p class="text-[10px] font-bold tracking-[0.18em] text-gold uppercase mt-1 mb-3">
            {{ member.role }}
          </p>
          <p class="text-gray-400 text-xs leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
