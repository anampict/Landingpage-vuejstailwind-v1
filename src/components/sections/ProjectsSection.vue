<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

import imgHalmahera from '@/assets/images/imagehalmahera.jpg'
import imgKalimantan from '@/assets/images/imagekalimantan.jpg'

useScrollReveal()

const projects = [
  {
    tag: 'NICKEL',
    tagColor: 'bg-gold text-primary',
    title: 'Aruna Nickel Complex – Halmahera',
    desc: 'A fully integrated smelter facility, utilizing hydrometallurgical processing to produce battery-grade nickel sulfate for the EV transition.',
    image: imgHalmahera,
    alt: 'Aruna Nickel Complex Halmahera',
  },
  {
    tag: 'SUSTAINABLE COAL',
    tagColor: 'bg-white/20 text-white',
    title: 'Pilar Sustainable Coal – Kalimantan',
    desc: 'An eco-friendly mining model focused on high-value low-sulfur coal, incorporating environmental progressive rehabilitation and local workforce development.',
    image: imgKalimantan,
    alt: 'Pilar Sustainable Coal Kalimantan',
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <h2
        class="reveal font-newsreader text-primary font-normal mb-12"
        style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.05s"
      >
        Strategic Projects
      </h2>

      <!-- ── Kartu Proyek ────────────────────────────────────────── -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="reveal reveal--scale group overflow-hidden"
          :style="`transition-delay:${0.1 + i * 0.15}s`"
        >
          <!-- Gambar -->
          <div class="relative overflow-hidden aspect-[4/3]">
            <img
              :src="project.image"
              :alt="project.alt"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <!-- Dark overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"
            ></div>

            <!-- Tag -->
            <span
              class="absolute top-4 left-4 text-[9px] font-bold tracking-[0.2em] px-3 py-1.5"
              :class="project.tagColor"
            >
              {{ project.tag }}
            </span>

            <!-- Title di atas gambar -->
            <h3
              class="absolute bottom-5 left-5 right-5 font-newsreader text-white text-xl font-light leading-snug"
            >
              {{ project.title }}
            </h3>
          </div>

          <!-- Deskripsi & link -->
          <div class="bg-gray-50 px-6 py-5">
            <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ project.desc }}</p>
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
