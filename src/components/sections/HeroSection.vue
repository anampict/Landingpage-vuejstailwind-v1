<script setup lang="ts">
import heroImage from '@/assets/images/herosectionhome.jpg'
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- ── Background Layer ──────────────────────────────────────── -->
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        alt="Aruna Mineral aerial landscape"
        class="w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
        style="transform: translateZ(0); will-change: auto"
      />
      <!-- Layer 1: base dark scrim across entire image -->
      <div class="absolute inset-0 bg-primary/55"></div>
      <!-- Layer 2: strong left-to-right gradient (Figma linear: navy → transparent) -->
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            90deg,
            #1a2744 0%,
            #1a2744cc 38%,
            #1a274480 62%,
            transparent 100%
          );
        "
      ></div>
      <!-- Layer 3: subtle top vignette so navbar text stays readable -->
      <div
        class="absolute inset-0"
        style="background: linear-gradient(180deg, rgba(26, 39, 68, 0.35) 0%, transparent 30%)"
      ></div>
    </div>

    <!-- ── Content ───────────────────────────────────────────────── -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20">
      <div class="max-w-2xl py-24 lg:py-32">
        <!-- Badge -->
        <div class="inline-flex animate-fade-in" style="animation-delay: 0.15s">
          <span
            class="bg-gold text-primary text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-1.5"
          >
            Leading Global Mineral Resilience
          </span>
        </div>

        <!-- Headline — Newsreader serif -->
        <h1
          class="font-newsreader text-white font-normal leading-[1.08] mt-6 mb-6 animate-fade-in-up"
          style="font-size: clamp(2.6rem, 4.8vw, 4.5rem); animation-delay: 0.35s"
        >
          Responsible Extraction for the Future.
        </h1>

        <!-- Subtitle -->
        <p
          class="text-white/65 text-[15px] font-light leading-relaxed mb-10 max-w-[440px] animate-fade-in-up"
          style="animation-delay: 0.55s"
        >
          Connecting Indonesia's natural resources with global needs through cutting-edge technology
          and uncompromising safety principles.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-wrap items-center gap-4 animate-fade-in-up"
          style="animation-delay: 0.75s"
        >
          <button
            class="border border-gold text-gold text-[11px] font-bold tracking-[0.18em] px-8 py-[14px] hover:bg-gold hover:text-primary transition-all duration-300 cursor-pointer"
          >
            OUR OPERATIONS
          </button>
          <button
            class="border border-white/60 text-white text-[11px] font-bold tracking-[0.18em] px-8 py-[14px] hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
