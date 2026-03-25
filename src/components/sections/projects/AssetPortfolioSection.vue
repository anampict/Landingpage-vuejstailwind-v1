<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// TODO: Tambahkan import gambar proyek setelah didownload
//
// import imgHalmahera  from '@/assets/images/imagehalmahera.jpg'
//   → Sudah ada, foto kompleks nikel Halmahera
//
// import imgKalimantan from '@/assets/images/imagekalimantan.jpg'
//   → Sudah ada, foto tambang batu bara Kalimantan
//
// import imgAustralia  from '@/assets/images/imageaustralia.jpg'
//   → TODO: Rekomendasi foto tambang iron ore perspektif udara, min 1200×900px

useScrollReveal()

// Sementara gunakan gambar yang sudah ada untuk 2 proyek pertama
import imgHalmahera from '@/assets/images/imagehalmahera.jpg'
import imgKalimantan from '@/assets/images/imagekalimantan.jpg'

const projects = [
  {
    tag: 'HALMAHERA',
    tagColor: 'bg-gold/90 text-primary',
    title: 'Nickel Project – Halmahera',
    status: 'PRODUCTION',
    statusColor: 'bg-emerald-500',
    image: imgHalmahera,
    imageAlt: 'Nickel Complex Halmahera',
    desc: 'Fully integrated hydrometallurgical facility producing battery-grade nickel sulfate. Capacity: 50,000 tpa MHP, supplying EV battery manufacturers across Asia and Europe.',
  },
  {
    tag: 'KALIMANTAN',
    tagColor: 'bg-blue-500/80 text-white',
    title: 'Sustainable Coal – Kalimantan',
    status: 'PRODUCTION',
    statusColor: 'bg-emerald-500',
    image: imgKalimantan,
    imageAlt: 'Coal Mine Kalimantan',
    desc: 'Eco-certified low-sulfur thermal coal operation with active progressive land rehabilitation. 8.5 mtpa capacity with zero open-pit legacy waste policy.',
  },
  {
    tag: 'WESTERN AUSTRALIA',
    tagColor: 'bg-white/15 text-white',
    title: 'Iron Ore Hub – Western Australia',
    status: 'EXPLORATION',
    statusColor: 'bg-amber-400',
    // TODO: Aktifkan setelah punya imageaustralia.jpg
    image: imgHalmahera,
    imageAlt: 'Iron Ore Hub Western Australia',
    desc: 'Greenfield iron ore project in the Pilbara region. Advanced geological surveys confirm 1.2 billion tonne resource estimate. Construction phase commencing Q3 2026.',
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <h2
            class="reveal font-newsreader text-primary font-normal"
            style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.05s"
          >
            Asset Portfolio
          </h2>
          <p
            class="reveal text-gray-500 text-[15px] leading-relaxed mt-3 max-w-md"
            style="transition-delay: 0.15s"
          >
            Curating high-yield assets that define the future of sustainable industrial development.
          </p>
        </div>
        <a
          href="#"
          class="reveal text-[10px] font-bold tracking-[0.18em] text-gray-400 hover:text-primary transition-colors duration-200 whitespace-nowrap self-start lg:self-auto"
          style="transition-delay: 0.2s"
        >
          SCROLL TO EXPLORE →
        </a>
      </div>

      <!-- ── Kartu Proyek ────────────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="reveal reveal--scale group overflow-hidden"
          :style="`transition-delay: ${0.1 + i * 0.12}s`"
        >
          <!-- Gambar -->
          <div class="relative overflow-hidden aspect-[4/3] bg-gray-100">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.imageAlt"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style="transform: translateZ(0)"
            />
            <!-- Placeholder jika gambar belum ada -->
            <div
              v-else
              class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
            >
              <p class="text-gray-400 text-xs text-center px-4">
                [imageaustralia.jpg<br />1200×900px]
              </p>
            </div>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent"
            ></div>

            <!-- Tag lokasi -->
            <span
              class="absolute top-4 left-4 text-[9px] font-bold tracking-[0.2em] px-3 py-1.5 backdrop-blur-sm"
              :class="project.tagColor"
            >
              {{ project.tag }}
            </span>

            <!-- Judul proyek di atas gambar -->
            <h3
              class="absolute bottom-5 left-5 right-5 font-newsreader text-white text-xl font-light leading-snug"
            >
              {{ project.title }}
            </h3>
          </div>

          <!-- Deskripsi + status -->
          <div class="bg-gray-50 px-5 py-5 border-t border-gray-100">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full flex-shrink-0" :class="project.statusColor"></span>
              <span class="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                {{ project.status }}
              </span>
            </div>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">{{ project.desc }}</p>
            <a
              href="#"
              class="text-[10px] font-bold tracking-[0.18em] text-primary hover:text-gold transition-colors duration-200"
            >
              EXPLORE PROJECT →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
