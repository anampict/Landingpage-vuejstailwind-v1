<script setup lang="ts">
import heroBg from '@/assets/images/worldmap.jpg'
import globeImage from '@/assets/images/globe.png'
</script>

<template>
  <section class="relative min-h-[70vh] flex items-center overflow-hidden bg-primary">
    <!-- ── Latar foto ─────────────────────────────────────────────── -->

    <img
      :src="heroBg"
      alt="Projects background"
      class="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
      fetchpriority="high"
      decoding="sync"
      style="transform: translateZ(0)"
    />
    <div class="absolute inset-0 bg-primary/75"></div>

    <!-- ── Grid layout teks + globe ──────────────────────────────── -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Kiri: teks -->
        <div>
          <div class="flex items-center gap-3 mb-5 animate-fade-in">
            <span class="w-6 h-px bg-gold"></span>
            <p class="text-gold text-[10px] font-bold tracking-[0.22em] uppercase">
              Global Footprint
            </p>
            <span class="w-px h-3 bg-white/20"></span>
            <p class="text-white/40 text-[10px] font-bold tracking-[0.18em] uppercase">
              3 Global Mines
            </p>
          </div>

          <h1
            class="font-newsreader text-white font-normal leading-[1.08] animate-fade-in-up"
            style="font-size: clamp(2.6rem, 5vw, 4.2rem); animation-delay: 0.2s"
          >
            Strategic Global<br />
            <em>Operations</em>
          </h1>

          <p
            class="text-white/55 text-[15px] font-light leading-relaxed mt-6 max-w-md animate-fade-in-up"
            style="animation-delay: 0.35s"
          >
            Driving the global energy transition through precision-led extraction and logistical
            excellence across our diversified asset portfolio.
          </p>
        </div>

        <!-- Kanan: Gambar globe/mineral -->
        <div
          class="flex justify-center lg:justify-end animate-fade-in"
          style="animation-delay: 0.4s"
        >
          <img
            :src="globeImage"
            alt="Global mineral operations"
            class="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
            style="transform: translateZ(0)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
