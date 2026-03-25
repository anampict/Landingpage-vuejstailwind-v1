<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// TODO: Ganti dengan foto workforce/komunitas lokal setelah didownload
// Rekomendasi: foto suasana pelatihan, kelas, atau komunitas setempat
// Resolusi minimal 1200×900px (2x)
// Contoh:
import workforceImage from '@/assets/images/comunity.jpg'
import grantImage from '@/assets/images/imagelab.jpg'

useScrollReveal()
</script>

<template>
  <section class="py-20 lg:py-28 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- ── Kolom Kiri: Gambar utama + card kecil ───────────────── -->
        <div class="relative reveal reveal--left" style="transition-delay: 0.1s">
          <!-- Gambar utama -->
          <div class="aspect-[4/3] overflow-hidden bg-gray-100 relative">
            <img
              src="@/assets/images/imagelab.jpg"
              alt="Komunitas lokal program Aruna Mineral"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Card kecil: The Aruna Grant -->
          <div
            class="absolute -bottom-6 right-0 lg:-right-6 bg-white border border-gray-100 shadow-lg p-5 max-w-[220px]"
          >
            <img
              src="@/assets/images/comunity.jpg"
              alt="Aruna Grant"
              class="w-full aspect-video object-cover mb-3"
            />

            <p class="text-primary text-[12px] font-bold mb-1">The Aruna Grant</p>
            <p class="text-gray-400 text-[11px] leading-relaxed">
              Providing tuition support for children of our workforce in Halmahera and East
              Kalimantan regions.
            </p>
          </div>
        </div>

        <!-- ── Kolom Kanan: Teks & Stats ───────────────────────────── -->
        <div class="lg:pl-8 pt-8 lg:pt-0">
          <p
            class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-4"
            style="transition-delay: 0.15s"
          >
            People-Centric Excellence
          </p>

          <h2
            class="reveal font-newsreader text-primary font-normal leading-[1.1] mb-5"
            style="font-size: clamp(1.9rem, 3.2vw, 2.8rem); transition-delay: 0.22s"
          >
            Empowering the <em>Local Workforce</em>
          </h2>

          <p
            class="reveal text-gray-500 text-[15px] leading-relaxed mb-10"
            style="transition-delay: 0.3s"
          >
            Our philosophy is defined by our role in others' lives. Over 70% of our employees are
            recruited from surrounding communities. Our community development philosophy prioritizes
            skills transfer, education access, and long-term economic uplift for the families we
            serve.
          </p>

          <!-- Stats -->
          <div class="reveal flex gap-10 mb-10" style="transition-delay: 0.38s">
            <div>
              <p class="font-newsreader text-primary text-4xl font-light">1,200+</p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mt-1">
                Local Jobs Created
              </p>
            </div>
            <div class="border-l border-gray-200 pl-10">
              <p class="font-newsreader text-primary text-4xl font-light">$4.5M</p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase mt-1">
                Community Investment
              </p>
            </div>
          </div>

          <a
            href="#"
            class="reveal text-[11px] font-bold tracking-[0.18em] text-primary hover:text-gold transition-colors duration-200"
            style="transition-delay: 0.44s"
          >
            READ THE 2023 SOCIAL IMPACT STORY →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
