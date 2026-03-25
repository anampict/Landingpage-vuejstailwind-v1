<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
import shelterImage from '@/assets/images/sheltermalam.jpg'

useScrollReveal()
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- ── Kolom Kiri: Gambar + Stat Card ───────────────────── -->
        <div class="relative reveal reveal--left" style="transition-delay: 0.1s">
          <div class="relative rounded-sm overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <img
              :src="shelterImage"
              alt="Fasilitas produksi Aruna Mineral"
              class="w-full h-full object-cover"
            />
            <!-- Overlay gradient bawah -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
            ></div>
          </div>

          <!-- Stat card mengambang di sudut kanan bawah -->
          <div class="absolute -bottom-6 -right-4 lg:-right-8 bg-gold px-7 py-6 shadow-xl">
            <p class="font-newsreader text-primary text-4xl font-light leading-none">5mt+</p>
            <p class="text-primary text-[10px] font-bold tracking-[0.18em] uppercase mt-1">
              Annual Production
            </p>
          </div>
        </div>

        <!-- ── Kolom Kanan: Teks ─────────────────────────────────── -->
        <div class="lg:pl-6">
          <!-- Label -->
          <p
            class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
            style="transition-delay: 0.15s"
          >
            Aruna Mineral
          </p>

          <!-- Heading -->
          <h2
            class="reveal font-newsreader text-primary font-normal leading-[1.1] mb-6"
            style="font-size: clamp(1.9rem, 3.2vw, 2.8rem); transition-delay: 0.25s"
          >
            We are the architects of mineral resilience.
          </h2>

          <!-- Body teks -->
          <p
            class="reveal text-gray-500 text-[15px] leading-relaxed mb-4"
            style="transition-delay: 0.35s"
          >
            Aruna Mineral Resources operates with a profound commitment to Indonesia's industrial
            growth. With over 25 years of operational excellence, we have mastered the delicate
            balance between resource extraction and environmental stewardship.
          </p>
          <p
            class="reveal text-gray-500 text-[15px] leading-relaxed mb-10"
            style="transition-delay: 0.42s"
          >
            Our ESG focus isn't just a policy—it's the core of our business model, ensuring that
            every ton of mineral produced contributes to a sustainable global supply chain.
          </p>

          <!-- Stats -->
          <div class="reveal flex gap-12" style="transition-delay: 0.5s">
            <div>
              <p class="font-newsreader text-primary text-4xl font-light">25+</p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mt-1">
                Years Experience
              </p>
            </div>
            <div class="border-l border-gray-200 pl-12">
              <p class="font-newsreader text-primary text-4xl font-light">Level A</p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mt-1">
                ESG Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
