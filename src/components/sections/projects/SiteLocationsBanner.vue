<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="bg-primary py-20 lg:py-28 overflow-hidden relative">
    <!-- Subtle radial glow dekoratif -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background: radial-gradient(
          ellipse 60% 60% at 50% 100%,
          rgba(201, 168, 76, 0.06) 0%,
          transparent 70%
        );
      "
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <p
        class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-5"
        style="transition-delay: 0.05s"
      >
        Real-time Visualization
      </p>

      <h2
        class="reveal font-newsreader text-white font-normal leading-[1.1] mb-5"
        style="font-size: clamp(2rem, 4vw, 3.4rem); transition-delay: 0.15s"
      >
        Explore Our Site Locations<br />
        <em>Globally</em>
      </h2>

      <p
        class="reveal text-white/50 text-[15px] leading-relaxed mb-10 max-w-lg mx-auto"
        style="transition-delay: 0.25s"
      >
        Access our full operational map for detailed geological data, output projections, and
        regional sustainability reports.
      </p>

      <div class="reveal" style="transition-delay: 0.35s">
        <a
          href="#"
          class="inline-flex items-center gap-3 bg-gold text-primary text-[11px] font-bold tracking-[0.18em] px-8 py-4 hover:bg-gold-hover transition-colors duration-200 group"
        >
          ↗ LAUNCH INTERACTIVE MAP
          <svg
            class="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
