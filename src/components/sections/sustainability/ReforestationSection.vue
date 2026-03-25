<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// TODO: Tambahkan gambar peta/visual reforestation setelah didownload
// Rekomendasi: foto aerial hutan yang telah direstorasi, atau peta progress
// Contoh: import mapImage from '@/assets/images/reforestationmap.jpg'

useScrollReveal()

const stats = [
  { value: '92%', label: 'Survival Rate' },
  { value: '42', label: 'Native Species' },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- ── Header ──────────────────────────────────────────────── -->
      <div class="text-center mb-14">
        <p
          class="reveal text-[10px] font-bold tracking-[0.22em] text-gold uppercase mb-3"
          style="transition-delay: 0.05s"
        >
          Measurable Change
        </p>
        <h2
          class="reveal font-newsreader text-primary font-normal"
          style="font-size: clamp(1.9rem, 3vw, 2.6rem); transition-delay: 0.15s"
        >
          Reforestation Progress
        </h2>
      </div>

      <!-- ── Stats Grid ──────────────────────────────────────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <!-- Kartu Kiri: Hectares Restored + progress bar -->
        <div
          class="reveal reveal--left bg-white border border-gray-100 p-10 flex flex-col justify-center min-h-[260px]"
          style="transition-delay: 0.2s"
        >
          <p
            class="font-newsreader text-primary leading-none mb-2"
            style="font-size: clamp(3rem, 6vw, 5rem)"
          >
            4,280
          </p>
          <p class="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
            Hectares Restored
          </p>

          <!-- Progress bar menuju target 2029 -->
          <div>
            <div class="flex justify-between text-xs text-gray-400 mb-2">
              <span>Target 10,000 Hectares by 2029</span>
              <span class="font-bold text-primary">43%</span>
            </div>
            <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-gold rounded-full transition-all duration-1000"
                style="width: 43%"
              ></div>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: 2 kartu -->
        <div class="flex flex-col gap-5">
          <!-- Kartu navy: Saplings -->
          <div
            class="reveal reveal--right bg-primary text-white p-10 flex items-end justify-between min-h-[130px] relative overflow-hidden"
            style="transition-delay: 0.25s"
          >
            <!-- TODO: Opsional — tambahkan gambar bibit/daun kecil di pojok kanan
                 <img src="@/assets/images/sapling.png" class="absolute right-0 bottom-0 w-24 opacity-20" /> -->
            <div>
              <p class="font-newsreader text-white leading-none text-5xl mb-1">125k+</p>
              <p class="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                Native Saplings Planted
              </p>
            </div>
          </div>

          <!-- Baris bawah: 2 stat kecil -->
          <div class="grid grid-cols-2 gap-5">
            <div
              v-for="(stat, i) in stats"
              :key="stat.label"
              class="reveal bg-white border border-gray-100 p-8 flex flex-col justify-center"
              :style="`transition-delay: ${0.3 + i * 0.08}s`"
            >
              <p class="font-newsreader text-primary text-4xl font-light mb-1">
                {{ stat.value }}
              </p>
              <p class="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
