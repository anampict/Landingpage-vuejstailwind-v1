<script setup lang="ts">
// TODO: Ganti komentar di bawah dengan import gambar aerial/hutan setelah didownload
// Rekomendasi: foto aerial hutan atau tambang dari atas, resolusi minimal 2560×1440px
import heroImage from '@/assets/images/herosustainability.jpg'
//
// Untuk sementara menggunakan placeholder warna navy dari CSS
</script>

<template>
  <section class="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
    <!-- ── Background: ganti div ini dengan <img> setelah punya foto ── -->
    <img
      :src="heroImage"
      alt="Sustainability aerial landscape"
      class="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
      fetchpriority="high"
      decoding="sync"
    />

    <!-- Overlay gradient bawah untuk fade ke putih -->
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          to bottom,
          rgba(26, 39, 68, 0.3) 0%,
          rgba(26, 39, 68, 0.7) 70%,
          rgba(26, 39, 68, 0.92) 100%
        );
      "
    ></div>

    <!-- ── Konten ──────────────────────────────────────────────────── -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
      <p class="text-gold text-[10px] font-bold tracking-[0.22em] uppercase mb-4 animate-fade-in">
        Aruna Mineral
      </p>
      <h1
        class="font-newsreader text-white font-normal leading-[1.08] animate-fade-in-up"
        style="font-size: clamp(2.4rem, 5vw, 4rem); animation-delay: 0.2s"
      >
        Committed to a <br />Sustainable Future.
      </h1>
      <p
        class="text-white/60 text-[15px] font-light leading-relaxed mt-4 max-w-lg animate-fade-in-up"
        style="animation-delay: 0.35s"
      >
        Our ESG framework guides every operational decision, ensuring that responsible extraction
        and environmental stewardship go hand in hand.
      </p>
    </div>
  </section>
</template>
