<script setup lang="ts">
import heroMineral from '@/assets/images/herosectionabout3.jpg'
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
    <!-- ── Latar opsional ─────────────────────────────────────────── -->

    <img
      :src="heroMineral"
      alt="About Us background"
      class="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      loading="eager"
      fetchpriority="high"
      decoding="sync"
      style="transform: translateZ(0)"
    />

    <!-- Dekoratif: garis halus di kanan -->
    <div
      class="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block"
      style="background: linear-gradient(270deg, rgba(201, 168, 76, 0.04) 0%, transparent 60%)"
    ></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- ── Kiri: Teks ──────────────────────────────────────────── -->
        <div>
          <p
            class="text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-5 animate-fade-in"
          >
            Since 1994
          </p>
          <h1
            class="font-newsreader text-primary font-normal leading-[1.08] animate-fade-in-up"
            style="font-size: clamp(2.6rem, 5vw, 4.2rem); animation-delay: 0.15s"
          >
            Leading the Mineral Resilience
          </h1>
          <p
            class="text-gray-500 text-[15px] font-light leading-relaxed mt-6 max-w-lg animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            Pioneering sustainable extraction methods since our founding in 1994, Aruna Mineral has
            grown from a single concession to a globally recognized leader in responsible mineral
            sourcing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
